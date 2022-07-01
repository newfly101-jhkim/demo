package kr.onthelive.jhkim.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/main")
public class MainController {
    public MainController() {
        log.debug("MainController");
    }
    // 아니 이게 왜

}
