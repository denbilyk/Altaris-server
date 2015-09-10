package net.altaris.repository;

import net.altaris.entity.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.stereotype.Repository;

import java.sql.Types;

/**
 * @author denis.bilyk.
 */
@Repository("dataRepository")
public class DataRepositoryImpl implements DataRepository<Data> {

    @Autowired
    JdbcOperations jdbcOperations;

    @Override
    public void persist(Data object) {
        Object[] params = new Object[]{object.getId(), object.getDescription()};
        int[] types = new int[]{Types.VARCHAR, Types.VARCHAR};

        jdbcOperations.update("INSERT INTO altaris(data_id, data_description) VALUES (cast(? as UUID), ?);", params, types);
    }

    @Override
    public void delete(Data object) {
        jdbcOperations.update("DELETE FROM yourapp_data\n" +
                " WHERE data_id = '" + object.getId().toString() + "';");
    }
}
