package com.training.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.assignment.ResponseTransfer;
import com.training.assignment.execption.ArticleAlreadyExistsException;
import com.training.assignment.execption.EmptyListException;
import com.training.assignment.execption.UserAlreadyExistsException;
import com.training.assignment.model.Article;
import com.training.assignment.model.User;
import com.training.assignment.service.Assignmentservice;

@RestController
@RequestMapping("/article")
@CrossOrigin("http://localhost:4200")
public class Assignmentcontroller {
	@Autowired
	private Assignmentservice assignmentservice;
	@GetMapping("/all")
	public List<Article> getArticleList() throws EmptyListException {
		return assignmentservice.getArticleList();
	}
	@PostMapping("/newarticle")
	 public ResponseTransfer addArticle(@RequestBody Article article) throws ArticleAlreadyExistsException {
		System.err.println(article.toString());
		return assignmentservice.addArticle(article);
	}

	
}
