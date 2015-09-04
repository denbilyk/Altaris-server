package net.altaris.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author Denis Bilyk.
 */
public class Dao implements IDao {
    private static final List<String> list = new ArrayList<String>();

    public void add(String row) {
        list.add(row);
    }

    public List<String> getAll() {
        return Collections.unmodifiableList(list);
    }
}
