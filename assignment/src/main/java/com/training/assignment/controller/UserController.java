package com.training.assignment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.assignment.ResponseTransfer;
import com.training.assignment.execption.UserAlreadyExistsException;
import com.training.assignment.model.User;
import com.training.assignment.service.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/addUser")
	public ResponseTransfer addUser(@RequestBody User user) throws UserAlreadyExistsException {
		System.err.println(user);
		return userService.addUser(user);
	}

}
