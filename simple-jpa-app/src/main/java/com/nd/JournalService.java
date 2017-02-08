package com.nd;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/2/8.
 */
@Service
public class JournalService {

    private static final Logger log = LoggerFactory.getLogger(JournalService.class);

    @Autowired
    private JournalRepository repo;

    /**使用data.sql代替此方法*/
    @Deprecated
    public void insertData() {
        log.info("> Inserting data...");
        repo.save(new Journal("Get to know Spring Boot", "Today I will learn Spring Boot", new Date()));
        repo.save(new Journal("Simple Spring Boot Project", "I will do my first Spring Boot Project", new Date()));
        repo.save(new Journal("Spring Boot Reading", "Read more about Spring Boot", new Date()));
        repo.save(new Journal("Spring Boot in the Cloud", "Spring Boot using Cloud Foundry", new Date()));
        log.info("> Done.");
    }

    public List<Journal> findAll() {
        return repo.findAll();
    }
}
