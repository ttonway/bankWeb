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

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/shoploan")
public class ShopLoanController {
    private static Logger logger = Logger.getLogger(ShopLoanController.class);

    @Autowired
    private UserService loanServer;

    @Autowired
    private LoanUserService loanuserServer;

    @RequestMapping("/index")
    public String index(HttpServletRequest req, HttpServletResponse resp) {
        String s = req.getQueryString();
        if (StringUtils.isEmpty(s)) s = "";
        Cookie cookie = new Cookie("utmsrc", s);
        cookie.setPath("/");
        cookie.setMaxAge(3600);
        resp.addCookie(cookie);
        return "/shoploan/index";
    }

    @RequestMapping("/form")
    public String form() {
        return "/shoploan/form";
    }

    @RequestMapping("/submitForm")
    public String submitForm(@RequestParam(value = "unit1") String workunit1,
                             @RequestParam(value = "unit2") String workunit2, @RequestParam(value = "local") String localPerson,
                             @RequestParam(value = "house") String house, @RequestParam(value = "income") String income,
                             @RequestParam(value = "guarantee") String guaranteeType, @RequestParam(value = "loannum") String loannum,
                             HttpServletRequest req, HttpServletResponse resp) {

        try {

            User loanUser = new User();
            loanUser.setLoanType("生意贷");
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
            Cookie cookie1 = new Cookie("guaranteeType", gType);
            cookie1.setPath("/");
            cookie1.setMaxAge(3600);
            resp.addCookie(cookie1);
            Cookie cookie = new Cookie("bankloanNum", loannum);
            cookie.setPath("/");
            cookie.setMaxAge(3600);
            resp.addCookie(cookie);
            Cookie cookie2 = new Cookie("bankid", String.valueOf(id));
            cookie2.setPath("/");
            cookie2.setMaxAge(3600);
            resp.addCookie(cookie2);
            return "/shoploan/application";
        } catch (Exception e) {
            logger.error("insert user fail.", e);
            return "/shoploan/form";
        }
    }

    @RequestMapping("/insertLoanUser")
    public String insertLoanUser(HttpServletRequest req, HttpServletResponse resp,
                                 @RequestParam(value = "area") String area, @RequestParam(value = "bank") String bank,
                                 @RequestParam(value = "userNm") String usernm, @RequestParam(value = "phoneNm") String phonenum,
                                 @RequestParam(value = "referrals") String referrals) {
        try {
            if (ReadCookieMap(req).get("bankid") == null) {
                return "/shoploan/form";
            }
            LoanUser loanUser = new LoanUser();
            loanUser.setArea(area);
            loanUser.setBank(bank);
            loanUser.setId(Integer.valueOf(ReadCookieMap(req).get("bankid").getValue().toString()));
            loanUser.setUsernm(usernm);
            loanUser.setPhonenum(phonenum);
            loanUser.setReferrals(referrals);
            loanUser.setLoanNum(Integer.valueOf(ReadCookieMap(req).get("bankloanNum").getValue().toString()));
            loanUser.setStatus("0");
            SimpleDateFormat dateFormater = new SimpleDateFormat("yyyyMMdd HHmmss");
            loanUser.setCreatetime(dateFormater.format(new Date()));
            loanUser.setUtmsrc(ReadCookieMap(req).get("utmsrc") == null ? "" : ReadCookieMap(req).get("utmsrc").getValue().toString());
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

    private static Map<String, Cookie> ReadCookieMap(HttpServletRequest request) {
        Map<String, Cookie> cookieMap = new HashMap<String, Cookie>();
        Cookie[] cookies = request.getCookies();
        if (null != cookies) {
            for (Cookie cookie : cookies) {
                cookieMap.put(cookie.getName(), cookie);
            }
        }
        return cookieMap;
    }
}
