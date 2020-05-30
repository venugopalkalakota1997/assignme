package com.training.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.training.assignment.model.User;



@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query(value = "select * from user where username = :username", nativeQuery = true)
	public User findByName(@Param(value = "username") String username);

}
