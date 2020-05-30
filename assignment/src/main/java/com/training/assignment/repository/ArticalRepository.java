package com.training.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.training.assignment.model.Article;




@Repository
public interface ArticalRepository extends JpaRepository<Article, Integer> {



}
