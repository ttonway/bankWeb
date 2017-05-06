package com.psbc.service;

import com.psbc.pojo.LoanUser;

public interface LoanUserService {
    int deleteByPrimaryKey(Integer loanid);

    int insert(LoanUser record);

    int insertSelective(LoanUser record);

    LoanUser selectByPrimaryKey(Integer loanid);

    int updateByPrimaryKeySelective(LoanUser record);

    int updateByPrimaryKey(LoanUser record);
}