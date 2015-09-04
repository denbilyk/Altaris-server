package net.altaris.ioc;

import com.google.inject.Module;
import com.google.inject.Singleton;
import com.google.inject.servlet.ServletModule;
import com.squarespace.jersey2.guice.JerseyGuiceServletContextListener;
import net.altaris.services.Dao;
import net.altaris.services.IDao;

import java.util.Collections;
import java.util.List;

/**
 * @author Denis Bilyk.
 */
public class GuiceInjectorContext extends JerseyGuiceServletContextListener {

    @Override
    protected List<? extends Module> modules() {
        return Collections.singletonList(new ServletModule() {
            @Override
            protected void configureServlets() {
                bind(IDao.class).to(Dao.class).in(Singleton.class);
            }
        });
    }
}
