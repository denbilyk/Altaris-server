package net.altaris.service;

import java.util.List;

/**
 * @author denis.bilyk.
 */
public interface IDao {
    public void add(String row);

    public List<String> getAll();
}
