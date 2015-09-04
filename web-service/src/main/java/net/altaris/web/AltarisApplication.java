package net.altaris.web;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Denis Bilyk.
 */
@ApplicationPath("/api")
public class AltarisApplication extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        final Set<Class<?>> returnValue = new HashSet<Class<?>>();
        returnValue.add(AltarisRESTService.class);
        return returnValue;
    }
}
