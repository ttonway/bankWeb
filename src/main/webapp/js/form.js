var bankObj = bankObj || (function(Win,Doc,$,undefined){
        var test,
            c2c = c2c || {};
        return {
            formInit:function(){
                var li = $('.form-item').find('li');
                var other = $(".js-other");
                li.on('click',function(e) {
                    var $target = $(e.target);
                    $target.siblings('li').removeClass('on');
                    other.removeClass('on')
                    $target.addClass('on');
                })
                other.on("input propertychange",function(e){
                    var $target = $(e.target);
                })
                other.on('focus',function(e){
                    other.addClass('on');
                    other.prev().find('li').removeClass('on');
                })

                var calIpt = $('.calcu-ipt');
                calIpt.on("keyup",function(e){
                    var $target = $(e.target);
                    var keyCode = e.keyCode;
                    var len = $target.val().length;

                    if ((keyCode >= 48 && keyCode <= 57)){    
                        e.returnValue = true;
                    } else {    
                        e.returnValue = false;
                        $target.val($target.val().substr(0,len-1))
                    }
                });
                calIpt.on('focus', function(e){
                    var $this = $(e.target);
                    var val = $this.val();
                    var curVal;

                    var re = /[\u4000-\uFFFF]/g

                    if(val){
                        curVal = val.replace(re, '');
                        $this.val(curVal);
                    }
                    $this.addClass('on');
                }).on('blur',function(e){
                    var $target = $(e.target);
                    var value = $target.val();

                    if(value){
                        $target.val(value + ' 元');
                    }
                    $target.removeClass('on');
                    
                })

                var plus = $('.cal-plu');
                plus.on('click',function(e){
                    var $this = $(e.target);
                    var val = $this.prev().val();
                    var placeholder = $this.prev().attr('placeholder');
                    var curVal;

                    var re = /[\u4000-\uFFFF]/g

                    if(val){
                        curVal = val.replace(re, '');
                    }else{
                        curVal = placeholder.replace(re, '');
                    }

                    curVal = parseInt(curVal) + 1000 + ' 元';
                    $this.prev().val(curVal);
                })

                var minus = $('.cal-minus');
                minus.on('click',function(e){
                    var $this = $(e.target);
                    var val = $this.next().val();
                    var placeholder = $this.next().attr('placeholder');
                    var curVal;

                    var re = /[\u4000-\uFFFF]/g

                    if(val){
                        curVal = val.replace(re, '');
                    }else{
                        curVal = placeholder.replace(re, '');
                    }

                    var res = parseInt(curVal) - 1000;

                    if((res - 1000) < 0){
                        res = 0;
                    }

                    curVal = res + ' 元';
                    $this.next().val(curVal);
                })

         
            },
            appInit:function(){
                $('.js-click').on('click',function(){
                	$('.click-wrap li').remove();
    				if($(this).attr('id') == 'area'){
    					$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>盐城市区</li>");
    					$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>东台支行</li>");
    					$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>大丰支行</li>");
    					$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>建湖支行</li>");
    					$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>射阳支行</li>");
    					$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>阜宁支行</li>");
    					$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>滨海支行</li>");
    					$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'areali'>响水支行</li>");
    				}
    				else if($(this).attr('id') == 'bank'){
    					var area = $('#area').text();
    					if(area == "请选择"){
    						alert("请选择支行区域.")
    						return;
    					}
    					if("盐城市区" == area){
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>市分行营业部（世纪大道金融城2号楼）</li>");
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>亭湖区支行（青年路钱江财富广场）</li>");
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>盐都区支行（盐马路东进路交界处）</li>");
    					}else if("东台支行" == area){
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'bankli'>东台支行</li>");
    					}else if("大丰支行" == area){
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'bankli'>大丰支行</li>");
    					}else if("建湖支行" == area){
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'bankli'>建湖支行</li>");
    					}else if("射阳支行" == area){
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'bankli'>射阳支行</li>");
    					}else if("阜宁支行" == area){
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'bankli'>阜宁支行</li>");
    					}else if("滨海支行" == area){
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'bankli'>滨海支行</li>");
    					}else if("响水支行" == area){
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name = 'bankli'>响水支行</li>");
    					}
    				};
                    $('.click-wrap').css('left','0')
                })
                $('.click-back').on('click',function(){
                    $('.click-wrap').css('left','100%')
                })
                $('.click-wrap li').on('click',function(){
                    $('.click-wrap').css('left','100%')
                })
            }
        };
    })(window,document,Zepto);
 
(function(){
	bankObj.formInit();
	bankObj.appInit();
})();

function liClick(obj) {
	if($(obj).attr('name') == 'areali'){
		$('#area').text($(obj).text()); 
	}
	if($(obj).attr('name') == 'bankli'){
		$('#bank').text($(obj).text());
	}
	$('.click-wrap').css('left', '100%')
}

function submitForm() {
	// 工作单位选择
	var select1;
	var select1Val = '';
	var len = $('.on[name="select1"]').length;
	if (len == 0) {
		select1 = "select1D";
		select1Val = $('[name1="select1D"]').val();
	} else {
		select1 = $('.on[name="select1"]').attr('name1');
		if (select1 != 'select1D')
			select1Val = select1;
		else
			select1Val = $('[name1="select1D"]').val();

	}
	if (select1Val == '' || select1Val == null) {
		alert("情选择工作单位.");
		return;
	}

	// 房屋信息
	var select2 = $('.on[name="select2"]').length > 0 ? $('.on[name="select2"]')
			.attr('name1')
			: '';
	if (select1 == 'select1D' && select2 == '') {
		alert("请选择房屋信息");
		return;
	}

	// 申请人数
	var select3 = $('.on[name="select3"]').length > 0 ? $('.on[name="select3"]')
			.attr('name1')
			: '';
	if (select3 == '') {
		alert("请选申请人数信息");
		return;
	}

	// 个人职务
	var select4 = $('.on[name="select4"]').length > 0 ? $('.on[name="select4"]')
			.attr('name1')
			: '';
	if (select4 == '') {
		alert("请选个人职务信息");
		return;
	}

	// 月收入
	select5 = $('#num1').val() == ''?$('#num1').attr('placeholder'):$('#num1').val();

	// 房贷月供
	select6 = $('#num2').val() == ''?$('#num2').attr('placeholder'):$('#num2').val();

	// 车贷月供
	select7 = $('#num3').val() == ''?$('#num3').attr('placeholder'):$('#num3').val();

	// 他行消费贷款已用金额
	select8 = $('#num4').val() == ''?$('#num4').attr('placeholder'):$('#num4').val();
	
	select5 = select5.replace(' ','').replace('元',''),
	select6 = select6.replace(' ','').replace('元',''),
	select7 = select7.replace(' ','').replace('元',''),
	select8 = select8.replace(' ','').replace('元','')
	
	location.href = "submitForm.htm?select1="+select1+"&select1Val="+select1Val+"&select2="+select2+"&select3="+select3+"&select4="+select4+"&select5="+select5+"&select6="+select6+"&select7="+select7+"&select8="+select8+"&r="+Math.random();
		
//	 $.ajax( {  
//	        type : "post",  
//	        url : "submitForm.htm",  
//	        data:params,  
//	        success : function(res) {  
//	        	if($.parseJSON(res).result == 'result'){
//	        		location.href = "result.htm?pageName="+$.parseJSON(res).result+"&id="+$.parseJSON(res).id+"&loanNum="+$.parseJSON(res).loanNum;
//	        	}else{
//	        		location.href = "result1.htm?pageName="+$.parseJSON(res).result;
//	        	}
//	        }  
//	    });  
}


function submitApplicationForm(){
	var userNm = $('#userNm').val();
	var phoneNm = $('#phoneNm').val();
	var area = $('#area').text();
	var bank = $('#bank').text();
	var referrals = $('#referrals').val();
	if(userNm == ""){
		alert("请输入您的姓名");
		return;
	}
	if(phoneNm == ""){
		alert("请输入您的手机号码");
		return;
	}
	 var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	 if (!reg.test(phoneNm)) {
	      alert("请输入正确手机号码");
			return;
	 };
	if(area == "请选择"){
		alert("请输入您的支行区域");
		return;
	}	
	if(bank == "请选择"){
		alert("请输入您的经办支行");
		return;
	}

	if (bank == "市分行营业部（世纪大道金融城2号楼）") {
		bank = "市分行营业部（人民路毓龙路交界处）";
	}
	location.href = "insertLoanUser.htm?userNm="+userNm+"&phoneNm="+phoneNm+"&area="+area+"&bank="+bank+"&referrals="+referrals+"&r="+Math.random();
}