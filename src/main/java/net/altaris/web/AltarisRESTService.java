package net.altaris.web;

import com.google.inject.Inject;
import lombok.extern.slf4j.Slf4j;
import net.altaris.services.IDao;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author Denis Bilyk.
 */

@Slf4j
@Path("/rest")
public class AltarisRESTService {

    @Inject
    private IDao dao;

    @GET
    @Path("submit")
    public Response submitData(@QueryParam("temp") String temperature, @QueryParam("humid") String humidity) {
        String res = "Temperature: " + temperature + "ºC  |  Humidity: " + humidity + "%\n";
        log.info(res);
        dao.add(res);
        return Response.status(200).entity(res).build();

    }

    @POST
    @Path("submit")
    public Response submitPost(@HeaderParam("temp") String temp, @HeaderParam("humid") String humid) {
        String res = "Temperature: " + temp + "ºC  |  Humidity: " + humid + "%\n";
        log.info(res);
        dao.add(res);
        return Response.status(200).build();
    }

    @GET
    @Path("hello")
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello!";
    }

    @GET
    @Path("guice")
    @Produces(MediaType.TEXT_PLAIN)
    public String guice() {
        StringBuilder sb = new StringBuilder();
        for (String row : dao.getAll()) {
            sb.append(row);
        }
        return sb.toString();
    }
}

