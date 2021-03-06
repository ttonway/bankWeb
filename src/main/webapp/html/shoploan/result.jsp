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
    <link href="../css/result2.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid">
    <div class="result-block">
        <img class="img-responsive" src="../images/shop-result.png"/>
        <div class="text-content">您已申请成功<br>24小时内客户经理会<br>与您联系</div>
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">查看资料清单</button>
    </div>
</div>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">资料清单</h4>
            </div>
            <div class="modal-body">
                <ul>
                    <li>夫妻双方身份证件</li>
                    <li>婚姻证明材料</li>
                    <li>营业执照</li>
                    <li>经营流水</li>
                    <li>经营单据</li>
                    <li>资产证明</li>
                    <li id="type-1" style="display: none;">抵押物产权证</li>
                    <li id="type-2" style="display: none;">担保人材料（身份证件、收入证明材料）</li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">我知道了</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="../lib/jquery/jquery.min.js"></script>
<script src="../lib/jquery.cookie.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../lib/bootstrap/js/bootstrap.min.js"></script>
<script>
    (function () {
        var guaranteeType = $.cookie('guaranteeType') || '';
        if (guaranteeType.indexOf('fcdy') != -1) {
            $('#type-1').show();
        }
        if (guaranteeType.indexOf('grdb') != -1) {
            $('#type-2').show();
        }
    })();
</script>
</body>
</html>
