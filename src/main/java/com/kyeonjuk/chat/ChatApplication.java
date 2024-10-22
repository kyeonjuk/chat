package com.kyeonjuk.chat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChatApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChatApplication.class, args);
		System.out.println("http://localhost:8080/");
		System.out.println("http://localhost:8080/login");
		System.out.println("http://localhost:8080/updateMyProfile");
	}

}
