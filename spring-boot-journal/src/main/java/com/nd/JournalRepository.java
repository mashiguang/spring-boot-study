package com.nd;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.format.annotation.DateTimeFormat;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/2/8.
 */
@Transactional
@RepositoryRestResource(collectionResourceRel = "entry", path = "journal")
public interface JournalRepository extends JpaRepository<JournalEntry, Long> {

    // 这里Journal指的是entity的类名，不是表名
    @Query("select j from JournalEntry j where j.title like %?1%")
    List<JournalEntry> findByTitleContaining(String word);

    List<JournalEntry> findBySummaryContaining(String word);

    List<JournalEntry> findByCreatedAfter(@Param("after") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date after);
    List<JournalEntry> findByCreatedBetween(@Param("after") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date after,
                                            @Param("before") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date before);



}
