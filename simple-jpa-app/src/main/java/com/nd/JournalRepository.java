package com.nd;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by Administrator on 2017/2/8.
 */
public interface JournalRepository extends JpaRepository<Journal, Long> {

    // 这里Journal指的是entity的类名，不是表名
    @Query("select j from Journal j where j.title like %?1%")
    List<Journal> findByTitleContaining(String word);

}
