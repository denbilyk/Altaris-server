package net.altaris.services;

import java.util.List;

/**
 * @author Denis Bilyk.
 */
public interface IDao {
    public void add(String row);

    public List<String> getAll();
}
