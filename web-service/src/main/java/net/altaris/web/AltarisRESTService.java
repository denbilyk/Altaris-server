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
    public Response submitData(@QueryParam("auth") String auth_id, @QueryParam("id") String module_id, @QueryParam("temp") String temperature, @QueryParam("humid") String humidity) {
        String res = "Auth Key: " + auth_id + " | Module ID: " + "0x" + Integer.toHexString(Integer.valueOf(module_id)).toUpperCase() + " | Temperature: " + temperature + "ºC  |  Humidity: " + humidity + "%\n";
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
    @Path("list")
    @Produces(MediaType.TEXT_PLAIN)
    public String guice() {
        StringBuilder sb = new StringBuilder();
        for (String row : dao.getAll()) {
            sb.append(row);
        }
        return sb.toString();
    }
}

