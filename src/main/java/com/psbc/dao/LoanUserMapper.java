package com.psbc.dao;

import java.util.List;
import java.util.Map;

import com.psbc.pojo.LoanUser;

public interface LoanUserMapper {
    int deleteByPrimaryKey(Long loanid);

    int insert(LoanUser record);

    int insertSelective(LoanUser record);

    LoanUser selectByPrimaryKey(Integer loanid);

    int updateByPrimaryKeySelective(LoanUser record);

    int updateByPrimaryKey(LoanUser record);
    
    int selectByCnt(Map<String,String> map);


    List<LoanUser> selectByList(Map<String,String> map);
    
    List<Map<String,String>> selectByStatusCnt(Map<String,String> map);
    
    Map<String,String> selectByDetial(Map<String,Long> map);
}