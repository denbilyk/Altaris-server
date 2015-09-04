package net.altaris.collector;

import lombok.extern.slf4j.Slf4j;
import net.altaris.service.IDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author denis.bilyk.
 */
@RestController
@Slf4j
public class HostCollectorController {

    @Autowired
    private IDao dao;

    @RequestMapping(value = "/api/submit", method = RequestMethod.GET)
    public String submit(
            @RequestParam("auth") String auth_id,
            @RequestParam("id") String module_id,
            @RequestParam("temp") String temperature,
            @RequestParam("humid") String humidity) {
        String res = "Auth Key: " + auth_id + " | Module ID: " + "0x" + Integer.toHexString(Integer.valueOf(module_id)).toUpperCase() + " | Temperature: " + temperature + "ºC  |  Humidity: " + humidity + "%\n";
        log.info(res);
        dao.add(res);
        return "submitted";
    }

    @RequestMapping(value = "/api/list", method = RequestMethod.GET)
    public String list(){
        StringBuilder sb = new StringBuilder();
        for (String s : dao.getAll()) {
            sb.append(s);
            sb.append("<br>");
        }
        return sb.toString();

    }

}
