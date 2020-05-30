package com.training.assignment.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "article")
public class Article {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	@Column(name = "id")
	int id;
	
	
	@NotNull
	@Column(name = "title")
	String title;
	
	@NotNull
	@Column(name = "body")
	String body;
	
	@NotNull
	@Column(name = "author")
	String author;
	@ManyToOne
	@JoinColumn(name = "fk_user_id", referencedColumnName = "id")
	User user;


	


	@Override
	public String toString() {
		return "Article [id=" + id + ", title=" + title + ", body=" + body + ", author=" + author + ", user=" + user
				+ "]";
	}


	public Article(@NotNull int id, @NotNull String title, @NotNull String body, @NotNull String author, User user) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
		this.author = author;
		this.user = user;
	}


	public Article() {
		super();
		// TODO Auto-generated constructor stub
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getBody() {
		return body;
	}


	public void setBody(String body) {
		this.body = body;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	
	
}
