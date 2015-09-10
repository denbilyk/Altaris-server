package net.altaris.service;

import java.util.List;

/**
 * @author denis.bilyk.
 */
public interface IDao {
    public boolean add(String row);

    public List<String> getAll();
}
