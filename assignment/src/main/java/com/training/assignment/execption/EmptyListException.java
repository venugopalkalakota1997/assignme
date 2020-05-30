package com.training.assignment.execption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Empty List")
public class EmptyListException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public EmptyListException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public EmptyListException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public EmptyListException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public EmptyListException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public EmptyListException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

}
