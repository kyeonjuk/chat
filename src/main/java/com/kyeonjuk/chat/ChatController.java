package com.kyeonjuk.chat;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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

}
