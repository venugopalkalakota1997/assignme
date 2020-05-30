package com.training.assignment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.assignment.ResponseTransfer;
import com.training.assignment.model.Article;
import com.training.assignment.repository.ArticalRepository;
import com.training.assignment.repository.UserRepository;

@Service
public class Assignmentservice {
	@Autowired
	private ArticalRepository articalRepository;
	public List<Article> getArticleList() {
		// TODO Auto-generated method stub
		return articalRepository.findAll();
	}
	public ResponseTransfer addArticle(Article article) {
		// TODO Auto-generated method stub
		
		articalRepository.save(article);
		return new ResponseTransfer("new article created");
	}

}
