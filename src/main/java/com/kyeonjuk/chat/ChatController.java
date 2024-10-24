package com.kyeonjuk.chat;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Map;

@Controller
public class ChatController {

    @GetMapping("/")
    public String test() {
        return "chats";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/updateMyProfile")
    public String updateMyProfile() {
        return "updateMyProfile";
    }

    @GetMapping("/my-info")
    public String myInfo() {
        return "my-info";
    }

    @GetMapping("/findFriend")
    public String findFriend() {
        return "findFriend";
    }

    @GetMapping("/findFriend/{email}")
    public ResponseEntity<?> findFriend(@PathVariable(name = "email") String email) {

        if (email.equals("123")) {
            return ResponseEntity.ok(Map.of("success", false));
        }

        User friend = new User("성원진", "realCastleOne", "/images/flat.png");

        return ResponseEntity.ok(Map.of("success", true, "friend", friend));
    }
}
