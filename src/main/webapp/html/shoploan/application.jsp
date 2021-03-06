<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta content="telephone=no" name="format-detection">
    <meta name="wap-font-scale" content="no">
    <meta name="keywords" content="">
    <meta name="description" content="">

    <link rel="shortcut icon" href="src/images/bank-logo.png" type="image/x-icon"/>

    <title>个人信息</title>

    <!-- Bootstrap -->
    <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link href="../css/base2.css" rel="stylesheet">
    <link href="../css/form2.css" rel="stylesheet">
</head>

<body>
<nav class="navbar navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">个人信息</a>
        </div>
    </div>
</nav>

<div class="container">
    <div class="row step-bar">
        <div class="indicator-line"></div>
        <div class="col-xs-4 col-md-4">
            <span class="indicator"><span class="indicator-inner"></span></span><br>填写基本信息
        </div>
        <div class="col-xs-4 col-md-4">
            <span class="indicator active"><span class="indicator-inner"></span></span><br>填写个人信息
        </div>
        <div class="col-xs-4 col-md-4">
            <span class="indicator"><span class="indicator-inner"></span></span><br>申请成功
        </div>
    </div>

    <div class="page-header">
        请如实填写下方内容
    </div>
    <form method="post" action="insertLoanUser.htm">
        <div class="form-group">
            <label for="userNm">姓名</label>
            <input type="text" class="form-control" id="userNm" name="userNm" placeholder="请输入您的姓名">
        </div>

        <div class="form-group">
            <label for="phoneNm">手机号码</label>
            <input type="text" class="form-control" id="phoneNm" name="phoneNm" placeholder="请输入您的手机号码">
        </div>

        <div class="form-group">
            <label for="area1">经办支行</label>
            <select class="form-control" id="area1">
                <option value="" selected disabled>请选择</option>
                <option>市区</option>
                <option>东台</option>
                <option>大丰</option>
                <option>建湖</option>
                <option>阜宁</option>
                <option>射阳</option>
                <option>滨海</option>
                <option>响水</option>
            </select>
            <select class="form-control" id="area2" style="margin-top: 5px; display: none;">
                <option value="" selected disabled>请选择</option>
            </select>

            <select class="form-control" id="bank" style="margin-top: 5px; display: none;">
                <option value="" selected disabled>请选择</option>
            </select>
        </div>

        <div class="form-group">
            <label for="referrals">推荐人</label>
            <input type="text" class="form-control" id="referrals" name="referrals" placeholder="非必填">
        </div>

        <input type="hidden" name="area">
        <input type="hidden" name="bank">
        <button type="button" class="btn btn-primary btn-block" onclick="submitApplicationForm()">提交</button>
    </form>
</div>


<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="../lib/jquery/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../lib/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/form2.js?v=3"></script>
</body>
</html>