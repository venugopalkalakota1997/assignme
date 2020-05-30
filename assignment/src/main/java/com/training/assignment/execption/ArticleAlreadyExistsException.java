package com.training.assignment.execption;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Article Already Exits")
public class ArticleAlreadyExistsException extends Exception {
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LoggerFactory.getLogger(ArticleAlreadyExistsException.class);

	public ArticleAlreadyExistsException() {
		logger.debug("inside ArticleAlreadyExistsException class");
	}
}
