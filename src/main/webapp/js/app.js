
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
    						$('.click-wrap ul').append("<li onclick='liClick(this)' name='bankli'>市分行营业部（人民路毓龙路交界处）</li>");
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
            
 

function liClick(obj) {
	if($(obj).attr('name') == 'areali'){
		$('#area').text($(obj).text()); 
	}
	if($(obj).attr('name') == 'bankli'){
		$('#bank').text($(obj).text());
	}
	$('.click-wrap').css('left', '100%')
}

