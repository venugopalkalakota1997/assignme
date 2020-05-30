package com.training.assignment.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.training.assignment.dto.UserDto;
import com.training.assignment.model.User;
import com.training.assignment.repository.UserRepository;



@Service
public class AppUserDetailsService implements UserDetailsService {

	@Override
	public String toString() {
		return "AppUserDetailsService [userRepository=" + userRepository + "]";
	}

	@Autowired
	UserRepository userRepository;



	@Override
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		try {

			UserDto userdto = new UserDto();
				User user = userRepository.findByName(name);
				
				userdto = new UserDto(user.getUsername(), user.getPassword(), "u");
				
				AppUser appUser = new AppUser(userdto);
				return appUser;
		

		} catch (Exception e) {
		}
		return null;
	}

}
