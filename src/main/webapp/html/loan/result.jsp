<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="http://www.suning.com/favicon.ico" type="image/x-icon"/>
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
    <link rel="stylesheet" href="../css/result.css" />
    <script>
    var c2c = c2c || {};
    </script>
</head>

<body>

<div class="res-wrapper">
    <img isLarge=true swipe=true class="res-bg" src="../images/bank-bg.png"/>
    <div class="res-div">
        <img src="../images/bank-res1.png"/>
        <div class="res-txt1">
            您可贷￥${sessionScope.bankloanNum}
        </div>
        <div class="res-txt2">
            额度仅供参考 以实际授信为准
        </div>
    </div>

    <div class="res-bottom">
    <a href="application.htm">    
        <div class="res-btn1">
            我要申请
        </div>
    </a>     
<a href="index.htm">       
        <div class="res-btn2">
            暂不申请
        </div>
</a>        
    </div>

</div>
<!-- 引入项目js资源文件,并配置构建地址演示 -->
    <script type="text/javascript" src="../js/zepto.min.js"></script>
    <script type="text/javascript" src="../js/lazyload.js"></script>
    <script type="text/javascript" src="../js/fastclick.js"></script>
    <script type="text/javascript" src="../js/swipe.js"></script>
    <script type="text/javascript" src="../js/base.js"></script>
</body>
</html>