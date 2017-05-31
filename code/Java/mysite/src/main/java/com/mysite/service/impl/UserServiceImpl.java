package com.mysite.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mysite.dao.BaseUserDao;
import com.mysite.entity.BaseUser;
import com.mysite.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Resource
	private BaseUserDao userDao;

	@Override
	public void register(BaseUser user) {
		userDao.insert(user);
	}

}
