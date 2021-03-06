<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="../images/bank-logo.png" type="image/x-icon"/>
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
    <link rel="stylesheet" href="../css/index.css" />
    <script>
    var c2c = c2c || {};
    </script>
</head>

<body>

<div class="seller-info">
    <img src="../images/bank-logo.png" alt="">
</div>
<div class="pic-wrapper">
    <div class="index-slide-box swipeParent lazyimg" id="J_index_slide_swipe" style="visibility: visible;">
        <ul class="slide_ul">
            <li>
                <img isLarge=true swipe=true src="../images/bank-banner1.png">
                <div class="img-div img-f1">
                    免担保 纯信用
                </div>
            </li>
            <li>
                <img isLarge=true swipe=true data-src="../images/bank-banner2.png">
                <div class="img-div img-f2">
                    <span class="f2-first">三年有效 最高可贷</span>
                    <span class="f2-second">￥500,000</span>
                </div>
            </li>
            <li>
                <img isLarge=true swipe=true data-src="../images/bank-banner3.png">
                <div class="img-div img-f2">
                    <span class="f2-first">手机 网银</span>
                    <span class="f2-three">随支 随借</span>
                </div>
            </li>
            <li>
                <img isLarge=true swipe=true data-src="../images/bank-banner4.png">
                <div class="img-div img-f2">
                    <span class="f2-first">月息只需</span>
                    <span class="f2-second">4.7‰</span>
                </div>
            </li>
        </ul>
        <ul class="index-slide-trigger nav-slide-trigger trigger">
            <li class="cur"></li>
            <li class=""></li>
            <li class=""></li>
            <li class=""></li>
        </ul>
    </div>
    <div class="bank-name">
        邮信贷
    </div>
    <a id="formHref" href="">
        <div class="bank-btn">
            看看我能贷多少
        </div>
    </a>
</div>
<!-- 引入项目js资源文件,并配置构建地址演示 -->
    <script type="text/javascript" src="../js/zepto.min.js"></script>
    <script type="text/javascript" src="../js/lazyload.js"></script>
    <script type="text/javascript" src="../js/fastclick.js"></script>
    <script type="text/javascript" src="../js/swipe.js"></script>
    <script type="text/javascript" src="../js/base.js"></script>
    <script type="text/javascript" src="../js/index.js?v=2"></script>
</body>
</html>