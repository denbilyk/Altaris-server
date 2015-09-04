package net.altaris.service.impl;

import net.altaris.service.IDao;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author denis.bilyk.
 */
@Component
public class Dao implements IDao {
    private static final List<String> list = new ArrayList<String>();

    public void add(String row) {
        list.add(row);
    }

    public List<String> getAll() {
        return Collections.unmodifiableList(list);
    }
}
