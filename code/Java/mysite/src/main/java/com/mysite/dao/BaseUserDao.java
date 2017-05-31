package com.mysite.dao;

import com.mysite.entity.BaseUser;

public interface BaseUserDao {
	int deleteByPrimaryKey(Integer id);

	int insert(BaseUser record);

	int insertSelective(BaseUser record);

	BaseUser selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(BaseUser record);

	int updateByPrimaryKey(BaseUser record);
}