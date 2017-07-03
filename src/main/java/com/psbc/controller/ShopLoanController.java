package com.psbc.controller;

import com.psbc.pojo.LoanUser;
import com.psbc.pojo.User;
import com.psbc.service.LoanUserService;
import com.psbc.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@RequestMapping("/shoploan")
public class ShopLoanController {
    private static Logger logger = Logger.getLogger(ShopLoanController.class);

    @Autowired
    private UserService loanServer;

    @Autowired
    private LoanUserService loanuserServer;

    @RequestMapping("/index")
    public String index() {
        return "/shoploan/index";
    }

    @RequestMapping("/form")
    public String form(HttpServletRequest req, HttpSession session, String fucode) {
        String s = req.getQueryString();
        if (StringUtils.isEmpty(s)) s = "";

        session.setAttribute("utmsrc", s);
        session.setAttribute("fucode", fucode);

        return "/shoploan/form";
    }

    @RequestMapping("/submitForm")
    public String submitForm(@RequestParam(value = "unit1") String workunit1,
                             @RequestParam(value = "unit2") String workunit2, @RequestParam(value = "local") String localPerson,
                             @RequestParam(value = "house") String house, @RequestParam(value = "income") String income,
                             @RequestParam(value = "guarantee") String guaranteeType, @RequestParam(value = "loannum") String loannum,
                             HttpSession session) {
        try {

            User loanUser = new User();
            loanUser.setLoanType("商易贷");
            loanUser.setWorkunit(workunit1);
            loanUser.setWorkunit2(workunit2);
            loanUser.setLocalPerson(localPerson);
            loanUser.setHouse(house);
            loanUser.setIncome(income);
            loanUser.setGuaranteeType(guaranteeType);
            int id = loanServer.insertSelective(loanUser);
            logger.debug("insert user success. id = " + id);
            // 存入预申请信息

            String gType = "";
            if (guaranteeType.contains("房产抵押")) {
                gType += "fcdy|";
            }
            if (guaranteeType.contains("个人担保")) {
                gType += "grdb";
            }

            session.setAttribute("guaranteeType", gType);
            session.setAttribute("bankloanNum", loannum);
            session.setAttribute("bankid", id);

            return "/shoploan/application";
        } catch (Exception e) {
            logger.error("insert user fail.", e);
            return "/shoploan/form";
        }
    }

    @RequestMapping("/insertLoanUser")
    public String insertLoanUser(HttpSession session,
                                 @RequestParam(value = "area") String area, @RequestParam(value = "bank") String bank,
                                 @RequestParam(value = "userNm") String usernm, @RequestParam(value = "phoneNm") String phonenum,
                                 @RequestParam(value = "referrals") String referrals) {
        try {
            Integer bankId = (Integer) session.getAttribute("bankid");
            if (bankId == null) {
                return "/shoploan/form";
            }
            LoanUser loanUser = new LoanUser();
            loanUser.setArea(area);
            loanUser.setBank(bank);
            loanUser.setId(bankId);
            loanUser.setUsernm(usernm);
            loanUser.setPhonenum(phonenum);
            loanUser.setReferrals(referrals);
            loanUser.setLoanNum(Integer.valueOf((String) session.getAttribute("bankloanNum")));
            loanUser.setStatus("0");
            SimpleDateFormat dateFormater = new SimpleDateFormat("yyyyMMdd HHmmss");
            loanUser.setCreatetime(dateFormater.format(new Date()));
            loanUser.setUtmsrc((String) session.getAttribute("utmsrc"));
            loanUser.setFromUserCode((String) session.getAttribute("fucode"));
            loanuserServer.insertSelective(loanUser);
            return "/shoploan/result";
        } catch (Exception e) {
            logger.error("insert loanUser fail.", e);
            return "/shoploan/form";
        }
    }

    @RequestMapping("/result")
    public String result(HttpServletRequest req, HttpServletResponse resp) {
        return "/shoploan/result";
    }

    @RequestMapping("/application")
    public String applicationForm() {
        return "/loan/application";
    }
}
