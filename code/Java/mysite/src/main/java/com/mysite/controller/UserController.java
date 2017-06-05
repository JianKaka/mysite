package com.mysite.controller;

import java.io.IOException;
import java.io.Writer;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mysite.service.UserService;

/**
 * @author suhan
 * @category userController 负责用户的注册，信心完善
 */
@Controller
@RequestMapping(value = "user")
public class UserController {

	@Resource
	private UserService userService;

	@RequestMapping(value = "register", method = RequestMethod.GET)
	public void register(HttpServletResponse response) {

		try {
			Writer writer = response.getWriter();
			writer.write("this is my register!");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
