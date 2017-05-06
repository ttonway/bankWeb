package com.psbc.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.psbc.dao.UserMapper;
import com.psbc.pojo.User;
import com.psbc.service.UserService;


@Service
public class UserServiceImpl implements UserService{
	@Resource
	UserMapper userMapper = null;
	
	@Override
	public int deleteByPrimaryKey(Integer id) {
		return 0;
	}

	@Override
	public int insert(User record) {
		return userMapper.insertSelective(record);
	}

	@Override
	public int insertSelective(User record) {
		userMapper.insertSelective(record);
		return record.getId();
	}

	@Override
	public User selectByPrimaryKey(Integer id) {
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(User record) {
		return 0;
	}

	@Override
	public int updateByPrimaryKey(User record) {
		return 0;
	}

}
