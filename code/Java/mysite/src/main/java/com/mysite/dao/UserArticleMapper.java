package com.mysite.dao;

import com.mysite.entity.UserArticle;

public interface UserArticleMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserArticle record);

    int insertSelective(UserArticle record);

    UserArticle selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserArticle record);

    int updateByPrimaryKey(UserArticle record);
}