package com.nd;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by Administrator on 2017/2/8.
 */
@SpringBootApplication
public class SimpleJpaApplication implements CommandLineRunner{

    private static Logger log = LoggerFactory.getLogger(SimpleJpaApplication.class);

    @Autowired
    private JournalService journalService;

    public static void main(String[] args) {
        SpringApplication.run(SimpleJpaApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        journalService.insertData();

        journalService.findAll().forEach(entry -> log.info(entry.getTitle()));
    }
}
