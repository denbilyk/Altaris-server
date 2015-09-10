package net.altaris.service.impl;

import lombok.extern.slf4j.Slf4j;
import net.altaris.entity.Data;
import net.altaris.repository.DataRepository;
import net.altaris.service.IDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

/**
 * @author denis.bilyk.
 */
@Slf4j
@Service("dataService")
public class Dao implements IDao {

    @Autowired
    @Qualifier("dataRepository")
    private DataRepository dataRepository;

    public boolean add(String row) {
        try {
            dataRepository.persist(new Data(UUID.randomUUID(), row));
            return true;
        } catch (Exception e) {
            log.error("ERROR SAVING DATA: " + e.getMessage(), e);
            return false;
        }
    }

    public List<String> getAll() {
        return Collections.unmodifiableList(new ArrayList<>());
    }
}
