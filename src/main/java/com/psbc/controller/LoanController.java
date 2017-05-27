package com.psbc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.psbc.pojo.LoanUser;
import com.psbc.pojo.User;
import com.psbc.service.LoanUserService;
import com.psbc.service.UserService;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;

@Controller
@RequestMapping("/loan")
public class LoanController {
	private static Map<String, Double> jobmap = new HashMap<String, Double>();
	static {
		jobmap.put("select4A", 0.85);
		jobmap.put("select4B", 0.75);
		jobmap.put("select4C", 0.55);
	}

	private static Map<String, String> select1Valmap = new HashMap<String, String>();
	static {
		select1Valmap.put("select1A", "公务员、事业单位、国有企业");
		select1Valmap.put("select1B", "公立学校、公立医院");
		select1Valmap.put("select1C", "金融、电信、烟草、电力");
	}

	private static Map<String, String> select2map = new HashMap<String, String>();
	static {
		select2map.put("select2A", "有");
		select2map.put("select2B", "没有");
	}

	private static Map<String, String> select3map = new HashMap<String, String>();
	static {
		select3map.put("select3A", "个人申请");
		select3map.put("select3B", "夫妻共同申请");
	}

	private static Map<String, String> select4map = new HashMap<String, String>();
	static {
		select4map.put("select4A", "高层管理");
		select4map.put("select4B", "中层管理");
		select4map.put("select4C", "普通职员");
	}
	@Autowired
	private UserService loanServer;

	@Autowired
	private LoanUserService loanuserServer;

	@RequestMapping("/index")
	public String index(HttpServletRequest req, HttpServletResponse resp) {
	    String s = req.getQueryString();
	    if(StringUtils.isEmpty(s)) s = "";
		Cookie cookie = new Cookie("utmsrc", s);
		cookie.setPath("/");
		cookie.setMaxAge(3600);
		resp.addCookie(cookie);
		return "/loan/index";
	}

	@RequestMapping("/form")
	public String form() {
		return "/loan/form";
	}

	@RequestMapping("/submitForm")
	public String submitForm(@RequestParam(value = "select1") String select1,
			@RequestParam(value = "select1Val") String select1Val, @RequestParam(value = "select2") String select2,
			@RequestParam(value = "select3") String select3, @RequestParam(value = "select4") String select4,
			@RequestParam(value = "select5") String select5, @RequestParam(value = "select6") String select6,
			@RequestParam(value = "select7") String select7, @RequestParam(value = "select8") String select8,
			HttpServletRequest req, HttpServletResponse resp) {
		try {
			if ("select1D".equals(select1) && "select2B".equals(select2)) {
				return "/loan/result2";
			} else if ("select1D".equals(select1) && "select2A".equals(select2)) {
				return "/loan/result1";
			} else {
				User loanUser = new User();
				loanUser.setLoanType("邮信贷");
				loanUser.setWorkunitselect(select1);
				if (!"select1D".equals(select1)) {
					select1Val = select1Valmap.get(select1);
				}
				loanUser.setWorkunit(select1Val);
				loanUser.setHouse(select2map.get(select2));
				loanUser.setLoannum(select3map.get(select3));
				loanUser.setJob(select4map.get(select4));
				loanUser.setIncome(select5);
				loanUser.setLoanhouse(select6);
				loanUser.setLoancar(select7);
				loanUser.setLoanconsumer(select8);
				// 第一种：需同时满足：2.2.1（4）（5）（6）中填写值均为0；2.2.1（2）中选项为中层或高层。授信额度=月收入*36，最大值为30万。
				// 房贷不算
				int loanNum = 0;
				if ("0".equals(select7) && "0".equals(select8)
						&& ("select4B".equals(select4) || "select4A".equals(select4))) {
					loanNum = Integer.valueOf(select5) * 36 > 500000 ? 500000 : Integer.valueOf(select5) * 36;
				}
				// 第二种：需同时满足：2.2.1（4）（5）（6）填写值为均0；2.2.1（2）中选项为职员。授信额度=月收入*24
				// 最大值为30万。最大值为30万。 房贷不算
				else if ("0".equals(select7) && "0".equals(select8) && "select4C".equals(select4)) {
					loanNum = Integer.valueOf(select5) * 24 > 300000 ? 300000 : Integer.valueOf(select5) * 24;
				}
				// 第三种：（除一、二以外的情况适用）授信额度=（还贷比系数*收入-房贷月供-车贷月供-其他贷款已用金额/36）*36/（1+6.175%）取整
				else {
					loanNum = (int) ((jobmap.get(select4) * Double.valueOf(select5) - Double.valueOf(select6)
							- Double.valueOf(select7) - Double.valueOf(select8) / 36) * 36 / (1.06175));
					loanNum = loanNum > 300000 ? 300000 : loanNum / 1000 * 1000;
				}
				loanNum = loanNum < 0 ? 0 : loanNum;
				int id = loanServer.insertSelective(loanUser);
				// 存入预申请信息
				Cookie cookie = new Cookie("bankloanNum", String.valueOf(loanNum));
				cookie.setPath("/");
				cookie.setMaxAge(3600);
				resp.addCookie(cookie);

				Cookie cookie2 = new Cookie("bankid", String.valueOf(id));
				cookie2.setPath("/");
				cookie2.setMaxAge(3600);
				resp.addCookie(cookie2);
				return "/loan/result";

			}
		} catch (Exception e) {
			return "/loan/form";
		}
	}

	@RequestMapping("/result")
	@ResponseBody
	public Map<String, String> result(HttpServletRequest req, HttpServletResponse resp) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("loanNum", req.getSession().getAttribute("loanNum").toString());
		map.put("id", req.getSession().getAttribute("id").toString());
		return map;
	}

	@RequestMapping("/insertLoanUser")
	public String insertLoanUser(HttpServletRequest req, HttpServletResponse resp,
			@RequestParam(value = "area") String area, @RequestParam(value = "bank") String bank,
			@RequestParam(value = "userNm") String usernm, @RequestParam(value = "phoneNm") String phonenum,
			@RequestParam(value = "referrals") String referrals) {
		try {
			if (ReadCookieMap(req).get("bankid") == null) {
				return "/loan/form";
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
			return "/loan/result3";
		} catch (Exception e) {
			return "/loan/form";
		}
	}

	@RequestMapping("/result3")
	public String result3() {
		return "/loan/result3";
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
