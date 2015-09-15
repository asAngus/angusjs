package com.angus.controller;

/**
 * Created by weipeng on 2015-09-15.
 */

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/user")
public class UserController {
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> login() {
        return ResponseEntity.ok("login");
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update() {
        return ResponseEntity.ok("update");
    }
    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity<?> delete() {
        return ResponseEntity.ok("delete");
    }
}
