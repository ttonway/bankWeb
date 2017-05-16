(function () {
    function initSelect() {
        var options1 = $('.input-single-select').find('li');
        options1.on('click', function (e) {
            var $target = $(e.target);
            $target.siblings('li').removeClass('on');
            $target.addClass('on');
        });

        var options2 = $('.input-multi-select').find('li');
        options2.on('click', function (e) {
            var $target = $(e.target);
            $target.toggleClass('on');
        });
    }

    var re = /[\u4000-\uFFFF]/g;

    function initInputs(inputs, suffix) {
        inputs.on("keyup", function (e) {
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
        inputs.on('focus', function (e) {
            var $this = $(e.target);
            var val = $this.val();
            var curVal;

            if (val) {
                curVal = val.replace(' ', '').replace(re, '');
                $this.val(curVal);
            }
        }).on('blur', function (e) {
            var $target = $(e.target);
            var value = $target.val();

            if (value) {
                $target.val(value + suffix);
            }
        });
    }

    function initWorkUnitSelect(work1, work2, input) {
        work1.on('change', function () {
            var unit1 = $(this).val();
            work2.find('option:enabled').remove();
            if ("农林牧渔" == unit1) {
                work2.append("<option>种植业</option>");
                work2.append("<option>养殖业</option>");
                work2.append("<option>农机服务</option>");
                work2.append("<option>饲料销售</option>");
                work2.append("<option>捕捞业</option>");
                work2.append("<option >其他</option>");
            } else if ("批发零售" == unit1) {
                work2.append("<option>服装</option>");
                work2.append("<option>鞋帽</option>");
                work2.append("<option>百货</option>");
                work2.append("<option>文具</option>");
                work2.append("<option>办公</option>");
                work2.append("<option>粮油副食</option>");
                work2.append("<option>果蔬</option>");
                work2.append("<option>生冷</option>");
                work2.append("<option>家装</option>");
                work2.append("<option>烟酒</option>");
                work2.append("<option>其他</option>");
            } else if ("服务类" == unit1) {
                work2.append("<option>酒店</option>");
                work2.append("<option>餐饮</option>");
                work2.append("<option>广告设计</option>");
                work2.append("<option>美容美发</option>");
                work2.append("<option>汽车配件</option>");
                work2.append("<option>教育</option>");
                work2.append("<option>其他</option>");
            }
            work2.change();

            if (unit1 == '农林牧渔' || unit1 == '批发零售' || unit1 == '服务类') {
                work2.show();
                input.hide();
            } else if (unit1 == '其他') {
                work2.hide();
                input.show();
            } else {
                work2.hide();
                input.hide();
            }
        });

        work2.on('change', function () {
            var unit2 = $(this).val();
            if ('其他' == unit2) {
                input.show();
            } else {
                input.hide();
            }
        });
    }

    function initBankSelect(area1, area2, bank) {
        area1.on('change', function () {
            var a1 = $(this).val();

            area2.find('option:enabled').remove();
            if ("市区" == a1) {
                area2.append("<option>城区</option>");
                area2.append("<option>乡镇</option>");

                area2.show();
            } else {
                area2.hide();
            }
            area2.change();
        });

        area2.on('change', function () {
            var a2 = $(this).val();

            bank.find('option:enabled').remove();
            if ('城区' == a2) {
                bank.append("<option>亭湖支行</option>");
                bank.append("<option>市分行营业部</option>");
                bank.append("<option>盐都区支行</option>");
                bank.append("<option>招商场商圈专营团队</option>");
                bank.append("<option>高力、美凯龙、丰盛、金太阳装饰城专营团队</option>");

                bank.show();
            } else {
                bank.hide();
            }
        });
    }

    $(function () {
        initSelect();

        initInputs($('#income'), ' 万元');

        initInputs($('#loannum'), ' 万元');

        $('.addon-add').on('click', function (e) {
            var $this = $(this);
            var val = $this.prev().val();
            var placeholder = $this.prev().attr('placeholder');
            var curVal;

            if (val) {
                curVal = val.replace(re, '');
            } else {
                curVal = placeholder.replace(re, '');
            }

            curVal = parseInt(curVal) + 10;
            $this.prev().val(curVal + ' 万元');
        });

        $('.addon-minus').on('click', function (e) {
            var $this = $(this);
            var val = $this.next().val();
            var placeholder = $this.next().attr('placeholder');
            var curVal;

            if (val) {
                curVal = val.replace(re, '');
            } else {
                curVal = placeholder.replace(re, '');
            }

            var res = parseInt(curVal) - 10;
            if (res < 0) {
                res = 0;
            }

            curVal = res;
            $this.next().val(curVal + ' 万元');
        });

        initWorkUnitSelect($('#workunit1'), $('#workunit2'), $('#workunit-other'));

        initBankSelect($('#area1'), $('#area2'), $('#bank'));
    });
}());


function submitForm() {
    var workunit1 = $('#workunit1').val();
    var workunit2 = $('#workunit2').val();
    var other = $('#workunit-other').val();

    if (!workunit1) {
        alert("情选择行业.");
        return;
    }
    if (!workunit2) {
        if (!$('#workunit2').is(":hidden")) {
            alert("情选择行业.");
            return;
        }
        workunit2 = '';
    }
    if (workunit1 == '其他') {
        if (!other) {
            alert("情选择行业.");
            return;
        }
        workunit1 = other;
        workunit2 = '';
    }
    if (workunit2 == '其他') {
        if (!other) {
            alert("情选择行业.");
            return;
        }
        workunit2 = other;
    }

    var localPerson = $('.input-single-select li.on[name="localPerson"]').text();
    if (!localPerson) {
        alert("请选是否为本地人");
        return;
    }

    var house = $('.input-single-select li.on[name="house"]').text();
    if (!localPerson) {
        alert("请选本地是否有房产");
        return;
    }

    var income = $('#income').val();
    income = income.replace(' ', '').replace('万元', '');
    income = parseInt(income) * 10000;
    if (isNaN(income)) {
        income = 0;
    }
    if (income === 0) {
        alert("请输入年销售额");
        return;
    }

    var types = [];
    $('.input-multi-select li.on[name="guaranteeType"]').each(function () {
        types.push($(this).text());
    });
    if (types.length === 0) {
        alert("请选择担保方式");
        return;
    }
    var guaranteeType = types.join("|");

    var loannum = $('#loannum').val();
    loannum = loannum.replace(' ', '').replace('万元', '');
    loannum = parseInt(loannum) * 10000;
    if (isNaN(loannum)) {
        loannum = 0;
    }
    if (loannum === 0) {
        alert("请输入申请金额");
        return;
    }

    location.href = "submitForm.htm?unit1=" + workunit1 + "&unit2=" + workunit2 + "&local=" + localPerson + "&house=" + house + "&income=" + income + "&guarantee=" + guaranteeType + "&loannum=" + loannum + "&r=" + Math.random();
}

function submitApplicationForm() {
    var userNm = $('#userNm').val();
    var phoneNm = $('#phoneNm').val();
    var area1 = $('#area1').val();
    var area2 = $('#area2').val();
    var bank = $('#bank').val();
    var referrals = $('#referrals').val();
    if (!userNm) {
        alert("请输入您的姓名");
        return;
    }
    if (!phoneNm) {
        alert("请输入您的手机号码");
        return;
    }
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    if (!reg.test(phoneNm)) {
        alert("请输入正确手机号码");
        return;
    }

    if (!area1 ||
        (!area2 && !$('#area2').is(":hidden")) ||
        (!bank && !$('#bank').is(":hidden"))) {
        alert("请选择经办支行");
        return;
    }

    var area = area1;
    if (area2) {
        area = area + area2;
    }
    if (!bank) {
        bank = '';
    }
    location.href = "insertLoanUser.htm?userNm=" + userNm + "&phoneNm=" + phoneNm + "&area=" + area + "&bank=" + bank + "&referrals=" + referrals + "&r=" + Math.random();
}