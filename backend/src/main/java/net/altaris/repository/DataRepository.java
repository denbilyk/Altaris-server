package net.altaris.repository;

import net.altaris.entity.DomainObject;

/**
 * @author denis.bilyk.
 */
public interface DataRepository<V extends DomainObject> {

    void persist(V object);

    void delete(V object);
}
