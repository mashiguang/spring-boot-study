package com.nd;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Administrator on 2017/2/20.
 */
@RestController
@RequestMapping("/")
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "hello docker.";
    }

}
