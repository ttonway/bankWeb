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
    <title></title>
    <link rel="stylesheet" href="../css/base.css" />
    <link rel="stylesheet" href="../css/common.css" />
    <link rel="stylesheet" href="../css/form.css" />
    <script>
    var c2c = c2c || {};
    </script>
</head>

<body>
<form class="form-wrap" method="post" action="submitForm.htm">
    <div class="form-tit">
        邮信贷信用测试
    </div>
    <div class="form-subtit">
        请如实填写下方内容，错误的信息会影响贷款能力测试
    </div>
    <div class="form-item">
        <div class="item-tit">
            工作单位(主申请人)
        </div>
        <ul class="form-list">
            <li name1="select1A" name="select1">
                A.公务员、事业单位、国有企业
            </li>
            <li name1="select1B" name="select1">
                B.公立学校、公立医院
            </li>
            <li name1="select1C" name="select1">
                C.金融、电信、烟草、电力
            </li>
        </ul>
        <input name1="select1D" type="text" class="form-ipt js-other" placeholder="其它" />
    </div>
    <div class="form-item">
        <div class="item-tit">
            是否本地有房产
        </div>
        <ul class="form-list short-list clearfix">
            <li  name1="select2A"  name="select2">
                有
            </li>
            <li  name1="select2B" name="select2">
                没有
            </li>
        </ul>
    </div>
    <div class="form-item">
        <div class="item-tit" >
            申请人数
        </div>
        <ul class="form-list short-list clearfix">
            <li name1="select3A"  name="select3">
                个人申请
            </li>
            <li name1="select3B"  name="select3">
                夫妻共同申请
            </li>
        </ul>
    </div>
    <div class="form-item">
        <div class="item-tit">
            个人职务(主申请人)
        </div>
        <ul class="form-list short-list clearfix">
            <li name1="select4A"  name="select4">
                高层管理
            </li>
            <li name1="select4B"  name="select4">
                中层管理
            </li>
            <li name1="select4C"  name="select4">
                普通职员
            </li>
        </ul>
    </div>
    <div class="form-item">
        <div class="item-tit">
            月收入(税前包括公积金)
        </div>
        <div class="item-calcula">
            <span class="cal-minus"></span>
            <input  type="tel" id="num1" class="calcu-ipt" placeholder="5000 元"  />
            <span class="cal-plu"></span>
        </div>
    </div>
    <div class="form-item">
        <div class="item-tit">
            房贷月供
        </div>
        <div class="item-calcula">
            <span class="cal-minus"></span>
            <input  type="tel" id="num2" class="calcu-ipt" placeholder="0 元"  />
            <span class="cal-plu"></span>
        </div>
    </div>
    <div class="form-item">
        <div class="item-tit">
            车贷月供
        </div>
        <div class="item-calcula">
            <span class="cal-minus"></span>
            <input  type="tel" id="num3" class="calcu-ipt" placeholder="0 元"  />
            <span class="cal-plu"></span>
        </div>
    </div>
    <div class="form-item">
        <div class="item-tit">
    其他贷款
        </div>
        <div class="item-calcula">
            <span class="cal-minus"></span>
            <input  type="tel" id="num4" class="calcu-ipt" placeholder="0 元"  />
            <span class="cal-plu"></span>
        </div>
    </div>

    <input type="hidden" name="select1">
    <input type="hidden" name="select1Val">
    <input type="hidden" name="select2">
    <input type="hidden" name="select3">
    <input type="hidden" name="select4">
    <input type="hidden" name="select5">
    <input type="hidden" name="select6">
    <input type="hidden" name="select7">
    <input type="hidden" name="select8">
    <div class="form-item">
        <button type='button' class="form-submit" onclick="submitForm()">点击测算</button>
    </div>
</form>

<!-- 引入项目js资源文件,并配置构建地址演示 -->
    <script type="text/javascript" src="../js/zepto.min.js"></script>
    <script type="text/javascript" src="../js/lazyload.js"></script>
    <script type="text/javascript" src="../js/fastclick.js"></script>
    <script type="text/javascript" src="../js/swipe.js"></script>
    <script type="text/javascript" src="../js/base.js"></script>
    <script type="text/javascript" src="../js/form.js?v=2"></script>
</body>
</html>