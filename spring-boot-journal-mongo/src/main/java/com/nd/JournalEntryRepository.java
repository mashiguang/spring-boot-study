package com.nd;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by Administrator on 2017/2/14.
 */
public interface JournalEntryRepository extends MongoRepository<JournalEntry, String> {

    List<JournalEntry> findByTitleLike(String word);

}
