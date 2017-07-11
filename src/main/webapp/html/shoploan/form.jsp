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

    <link rel="shortcut icon" href="http://www.suning.com/favicon.ico" type="image/x-icon"/>

    <title>基本信息</title>

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
            <a class="navbar-brand" href="#">基本信息</a>
        </div>
    </div>
</nav>

<div class="container">
    <div class="row step-bar">
        <div class="indicator-line"></div>
        <div class="col-xs-4 col-md-4">
            <span class="indicator active"><span class="indicator-inner"></span></span><br>填写基本信息
        </div>
        <div class="col-xs-4 col-md-4">
            <span class="indicator"><span class="indicator-inner"></span></span><br>填写个人信息
        </div>
        <div class="col-xs-4 col-md-4">
            <span class="indicator"><span class="indicator-inner"></span></span><br>申请成功
        </div>
    </div>

    <div class="page-header">
        请如实填写下方内容
    </div>
    <form method="post" action="submitForm.htm">
        <div class="form-group">
            <label for="workunit1">行业选择</label>
            <select class="form-control" id="workunit1">
                <option value="" selected disabled>从事行业</option>
                <option>农林牧渔</option>
                <option>批发零售</option>
                <option>服务类</option>
                <option>贸易类</option>
                <option>生产加工</option>
                <option>其他</option>
            </select>
            <select class="form-control" id="workunit2" style="margin-top: 5px; display: none;">
                <option value="" selected disabled>行业细分</option>
            </select>

            <input type="text" class="form-control" id="workunit-other" placeholder="请手动输入"
                   style="margin-top: 5px; display: none;">
        </div>

        <div class="form-group">
            <label for="localPerson">是否为本地人</label>
            <ul id="localPerson" class="form-control input-single-select">
                <li name="localPerson">是</li>
                <li name="localPerson">否</li>
            </ul>
        </div>

        <div class="form-group">
            <label for="house">本地是否有房产</label>
            <ul id="house" class="form-control input-single-select">
                <li name="house">有</li>
                <li name="house">没有</li>
            </ul>
        </div>

        <div class="form-group">
            <label for="income">年销售额（万元）</label>
            <input type="tel" class="form-control" id="income" placeholder="万元"
                   style="text-align: center;">
        </div>

        <div class="form-group"><label for="guaranteeType">担保方式</label>
            <ul id="guaranteeType" class="form-control input-multi-select">
                <li name="guaranteeType">房产抵押</li>
                <li name="guaranteeType">个人担保</li>
            </ul>
        </div>

        <div class="form-group">
            <label for="loannum">申请金额</label>
            <div class="input-group">
                <div class="input-group-btn addon-minus">
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-minus"></span>
                    </button>
                </div>
                <input type="tel" class="form-control" id="loannum" placeholder="万元"
                       style="text-align: center;">
                <div class="input-group-btn addon-add">
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-plus"></span>
                    </button>
                </div>
            </div>
        </div>

        <input type="hidden" name="unit1">
        <input type="hidden" name="unit2">
        <input type="hidden" name="local">
        <input type="hidden" name="house">
        <input type="hidden" name="income">
        <input type="hidden" name="guarantee">
        <input type="hidden" name="loannum">
        <button type="button" class="btn btn-primary btn-block" onclick="submitForm()">点击申请</button>
    </form>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="../lib/jquery/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../lib/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/form2.js?v=3"></script>

</body>
</html>
