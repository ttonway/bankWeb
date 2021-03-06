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

    <title>商易贷</title>

    <!-- Bootstrap -->
    <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link href="../css/base2.css" rel="stylesheet">
    <link href="../css/index2.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img class="background" src="../images/shop-bg1.png">

                <div class="carousel-caption">
                    <div style="font-size: 26px; margin-top: 80px;">贷款对象</div>
                    <div style="font-size: 16px; margin-top: 60px;">个体工商户<span class="divider">|</span>小微企业主<span
                            class="divider">|</span>种养殖大户
                    </div>
                </div>
            </div>
            <div class="item">
                <img class="background" src="../images/shop-bg2.png">
                <div class="carousel-caption">
                    <div style="margin-top: 80px;">额度最高</div>
                    <div class="highlight" style="margin-top: 10px;">1000万</div>
                    <div style="margin-top: 10px;">随借随还</div>
                </div>
            </div>
            <div class="item">
                <img class="background" src="../images/shop-bg3.png">
                <div class="carousel-caption">
                    <div style="margin-top: 100px;">贷款期限最长</div>
                    <div class="highlight" style="margin-top: 10px;">5年</div>
                </div>
            </div>
            <div class="item">
                <img class="background" src="../images/shop-bg4.png">
                <div class="carousel-caption">
                    <div style="margin-top: 80px;">月息低至</div>
                    <div class="highlight" style="margin-top: 10px;">5.075‰</div>
                    <div style="margin-top: 10px;">抵押类</div>
                </div>
            </div>
        </div>
        <img class="top-logo" src="../images/shop-logo.png">
        <a type="button" class="btn btn-primary" href="#">立即申请</a>
        <img class="bottom-logo" src="../images/bank-logo3.png">
    </div>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="../lib/jquery/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../lib/bootstrap/js/bootstrap.min.js"></script>
<script src="../lib/carousel-swipe.js"></script>
<script>
    var params = location.search;
    if (!params) {
        params = "?r=" + Math.random();
    } else {
        params += "&r=" + Math.random();
    }
    $('a[type="button"]').attr('href', "form.htm" + params);
    $("#myCarousel").carousel();
</script>

</body>
</html>
