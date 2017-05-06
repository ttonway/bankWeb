var bank = bank || (function (Win, Doc, $, undefined) {
        var test,
            c2c = c2c || {};
        return {
            formInit: function () {
                var options1 = $('.form-item .item-single-select').find('li');
                options1.on('click', function (e) {
                    var $target = $(e.target);
                    $target.siblings('li').removeClass('on');
                    $target.addClass('on');
                });

                var options2 = $('.form-item .item-multi-select').find('li');
                options2.on('click', function (e) {
                    var $target = $(e.target);
                    $target.toggleClass('on');
                });

                var calIpt = $('.calcu-ipt');
                calIpt.on("keyup", function (e) {
                    var $target = $(e.target);
                    var keyCode = e.keyCode;
                    var len = $target.val().length;

                    if ((keyCode >= 48 && keyCode <= 57)) {
                        e.returnValue = true;
                    } else {
                        e.returnValue = false;
                        $target.val($target.val().substr(0, len - 1))
                    }
                });
                calIpt.on('focus', function (e) {
                    var $this = $(e.target);
                    var val = $this.val();
                    var curVal;

                    var re = /[\u4000-\uFFFF]/g;

                    if (val) {
                        curVal = val.replace(re, '');
                        $this.val(curVal);
                    }
                    $this.addClass('on');
                }).on('blur', function (e) {
                    var $target = $(e.target);
                    var value = $target.val();

                    if (value) {
                        $target.val(value + ' 元');
                    }
                    $target.removeClass('on');

                })

                var plus = $('.cal-plu');
                plus.on('click', function (e) {
                    var $this = $(e.target);
                    var val = $this.prev().val();
                    var placeholder = $this.prev().attr('placeholder');
                    var curVal;

                    var re = /[\u4000-\uFFFF]/g;

                    if (val) {
                        curVal = val.replace(re, '');
                    } else {
                        curVal = placeholder.replace(re, '');
                    }

                    curVal = parseInt(curVal) + 1000 + ' 元';
                    $this.prev().val(curVal);
                })

                var minus = $('.cal-minus');
                minus.on('click', function (e) {
                    var $this = $(e.target);
                    var val = $this.next().val();
                    var placeholder = $this.next().attr('placeholder');
                    var curVal;

                    var re = /[\u4000-\uFFFF]/g;

                    if (val) {
                        curVal = val.replace(re, '');
                    } else {
                        curVal = placeholder.replace(re, '');
                    }

                    var res = parseInt(curVal) - 1000;

                    if ((res - 1000) < 0) {
                        res = 0;
                    }

                    curVal = res + ' 元';
                    $this.next().val(curVal);
                })


            },
            appInit: function () {
                $('.js-click').on('click', function () {
                    $('.click-wrap li').remove();

                    var elId = $(this).attr('id');
                    if (elId == 'workunit1') {
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit1li'>农林牧渔</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit1li'>批发零售</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit1li'>服务类</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit1li'>贸易类</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit1li'>生产加工</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit1li'>其他</li>");
                    } else if (elId == 'workunit2') {
                        var unit1 = $('#workunit1').text();
                        if ("农林牧渔" == unit1) {
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='workunit2li'>种植业</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='workunit2li'>养殖业</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='workunit2li'>农机服务</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='workunit2li'>饲料销售</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='workunit2li'>捕捞业</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='workunit2li'>其他</li>");
                        } else if ("批发零售" == unit1) {
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>服装</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>鞋帽</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>百货</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>文具</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>办公</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>粮油副食</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>果蔬</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>生冷</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>家装</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>烟酒</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>其他</li>");
                        } else if ("服务类" == unit1) {
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>酒店</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>餐饮</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>广告设计</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>美容美发</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>汽车配件</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>教育</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'workunit2li'>其他</li>");
                        }
                    }


                    else if (elId == 'area') {
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>市区</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>东台</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>大丰</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>建湖</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>阜宁</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>射阳</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>滨海</li>");
                        $('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>响水</li>");
                    } else if (elId == 'bank') {
                        var area = $('#area').text();
                        if (area == "请选择") {
                            alert("请选择支行区域.")
                            return;
                        }
                        if ("市区" == area) {
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>亭湖支行</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>市分行营业部</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>盐都区支行</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>招商场商圈专营团队</li>");
                            $('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>高力、美凯龙、丰盛、金太阳装饰城专营团队</li>");
                        }
                    }

                    $('.click-wrap').css('left', '0')
                })
                $('.click-back').on('click', function () {
                    $('.click-wrap').css('left', '100%')
                })
                $('.click-wrap li').on('click', function () {
                    $('.click-wrap').css('left', '100%')
                })
            }
        };
    })(window, document, Zepto);

(function () {
    bank.formInit();
    bank.appInit();
})();

function liClick(obj) {
    var el = $(obj);
    var name = el.attr('name');
    var text = $(obj).text();
    if (name == 'workunit1li') {
        $('#workunit1').text(text);
        $('#workunit2').text($('#workunit2').attr('placeholder'));
        if (text == '农林牧渔' || text == '批发零售' || text == '服务类') {
            $('#workunit2').parent('.item-select').show();
            $('#workunit-other').hide();
        } else if (text == '其他') {
            $('#workunit2').parent('.item-select').hide();
            $('#workunit-other').show();
        } else {
            $('#workunit2').parent('.item-select').hide();
            $('#workunit-other').hide();
        }
    } else if (name == 'workunit2li') {
        $('#workunit2').text(text);
        if (text == '其他') {
            $('#workunit-other').show();
        } else {
            $('#workunit-other').hide();
        }
    }


    else if (name == 'areali') {
        $('#area').text(text);
        if (text == '市区') {
            $('#bank').parent('.app-item').show();
        } else {
            $('#bank').text('请选择');
            $('#bank').parent('.app-item').hide();
        }
    } else if (name == 'bankli') {
        $('#bank').text(text);
    }
    $('.click-wrap').css('left', '100%')
}

function submitForm() {
    var workunit1 = $('#workunit1').text();
    var workunit2 = $('#workunit2').text();
    var other = $('#workunit-other').val();

    if (workunit1 == $('#workunit1').attr('placeholder')) {
        alert("情选择行业.");
        return;
    }
    if (!$('#workunit2').is(":hidden") && workunit2 == $('#workunit2').attr('placeholder')) {
        alert("情选择行业.");
        return;
    }
    if (workunit1 == '其他' || workunit2 == '其他') {
        if (!other) {
            alert("情选择行业.");
            return;
        }
    }

    if (workunit1 == '其他') {
        workunit1 = other;
        workunit2 = '';
    }
    if (workunit2 == '其他') {
        workunit2 = other;
    }


    var localPerson = $('.on[name="localPerson"]').text();
    if (!localPerson) {
        alert("请选是否为本地人");
        return;
    }

    var house = $('.on[name="house"]').text();
    if (!localPerson) {
        alert("请选本地是否有房产");
        return;
    }

    var income = $('#income').val();

    var types = [];
    $('.on[name="guaranteeType"]').each(function () {
        types.push($(this).text());
    });
    var guaranteeType = types.join("|");

    var loannum = $('#loannum').val();
    loannum = loannum.replace(' ', '').replace('元', '');

    location.href = "submitForm.htm?unit1=" + workunit1 + "&unit2=" + workunit2 + "&local=" + localPerson + "&house=" + house + "&income=" + income + "&guarantee=" + guaranteeType + "&loannum=" + loannum + "&r=" + Math.random();
}


function submitApplicationForm() {
    var userNm = $('#userNm').val();
    var phoneNm = $('#phoneNm').val();
    var area = $('#area').text();
    var bank = $('#bank').text();
    var referrals = $('#referrals').val();
    if (userNm == "") {
        alert("请输入您的姓名");
        return;
    }
    if (phoneNm == "") {
        alert("请输入您的手机号码");
        return;
    }
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    if (!reg.test(phoneNm)) {
        alert("请输入正确手机号码");
        return;
    }
    ;
    if (area == "请选择") {
        alert("请输入您的支行区域");
        return;
    }
    if (bank == "请选择") {
        if (area == "市区") {
            alert("请输入您的经办支行");
            return;
        } else {
            bank = '';
        }
    }
    location.href = "insertLoanUser.htm?userNm=" + userNm + "&phoneNm=" + phoneNm + "&area=" + area + "&bank=" + bank + "&referrals=" + referrals + "&r=" + Math.random();
}