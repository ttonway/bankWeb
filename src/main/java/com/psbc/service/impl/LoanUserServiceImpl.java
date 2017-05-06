package com.psbc.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.psbc.dao.LoanUserMapper;
import com.psbc.pojo.LoanUser;
import com.psbc.service.LoanUserService;

@Service
public class LoanUserServiceImpl implements LoanUserService {
	@Resource
	LoanUserMapper daoClent = null;

	@Override
	public int deleteByPrimaryKey(Integer loanid) {
		return 0;
	}

	@Override
	public int insert(LoanUser record) {
		return 0;
	}

	@Override
	public int insertSelective(LoanUser record) {
		return daoClent.insertSelective(record);
	}

	@Override
	public LoanUser selectByPrimaryKey(Integer loanid) {
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(LoanUser record) {
		return 0;
	}

	@Override
	public int updateByPrimaryKey(LoanUser record) {
		return 0;
	}

}
