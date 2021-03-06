<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="src/images/bank-logo.png" type="image/x-icon"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta content="telephone=no" name="format-detection">
    <meta name="wap-font-scale" content="no">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <title>邮信贷</title>
    <link rel="stylesheet" href="../css/base.css" />
    <link rel="stylesheet" href="../css/common.css" />
    <link rel="stylesheet" href="../css/form.css" />
    <script>
    var c2c = c2c || {};
    </script>
</head>

<body>
<form class="form-wrap" method="post" action="insertLoanUser.htm">
    <div class="form-tit">
        邮信贷申请
    </div>
    <div class="form-subtit">
        请如实填写下方内容，错误的信息会影响贷款能力测试
    </div>
    <div class="app-form">
        <div class="app-item">
            <span>姓 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
            <input type="text" id="userNm" name="userNm" placeholder="请输入您的姓名">
        </div>
        <div class="app-item">
            <span>手机号码</span>
            <input type="text" id="phoneNm" name="phoneNm" placeholder="请输入您的手机号码">
        </div>
        <div class="app-item">
            <span>支行区域</span>
            <span  class="js-click ipt-span" id="area">请选择</span>
            <i class="app-ico" class="js-click"></i>
        </div>
        <div class="app-item">
            <span>经办支行</span>
            <span  class="js-click ipt-span" id="bank">请选择</span>
            <i class="app-ico" class="js-click"></i>
        </div>
        <div class="app-item">
            <span>推 荐 人</span>
            <input type="text" id="referrals" name="referrals" placeholder="非必填">
        </div>
    </div>

    <input type="hidden" name="area">
    <input type="hidden" name="bank">
    <div class="form-item">
        <button type='button' onclick="submitApplicationForm()" class="form-submit">提交</button>
    </div>
</form>
<div class="click-wrap">
    <div class="click-back">
        <span>返回</span>
    </div>
    <ul>
        <li>银行1</li>
        <li>银行1</li>
        <li>银行1</li>
        <li>银行1</li>
    </ul>
</div>

<!-- 引入项目js资源文件,并配置构建地址演示 -->
    <script type="text/javascript" src="../js/zepto.min.js"></script>
    <script type="text/javascript" src="../js/lazyload.js"></script>
    <script type="text/javascript" src="../js/fastclick.js"></script>
    <script type="text/javascript" src="../js/swipe.js"></script>
    <script type="text/javascript" src="../js/base.js"></script>
    <script type="text/javascript" src="../js/form.js?v=2"></script>
</body>
</html>