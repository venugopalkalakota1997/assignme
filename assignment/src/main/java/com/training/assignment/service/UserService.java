package com.training.assignment.service;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.training.assignment.ResponseTransfer;
import com.training.assignment.execption.UserAlreadyExistsException;
import com.training.assignment.model.User;
import com.training.assignment.repository.UserRepository;



@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public ResponseTransfer addUser(User user) throws UserAlreadyExistsException {
		User user1 = userRepository.findByName(user.getUsername());
		if (user1 != null) {
			throw new UserAlreadyExistsException();
		} else {
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
			userRepository.save(user);
			return new ResponseTransfer("Save successfully");
		}
	}

}
