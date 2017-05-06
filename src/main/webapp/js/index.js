var bank = bank || (function(Win,Doc,$,undefined){
        var test,
            c2c = c2c || {};
        return {
            goTop: function(){
                var height = window.innerHeight || window.screen.height,
                    $top = $("#Top");
                $(window).on("scroll", function() {
                    window.pageYOffset < 1 * height ? $top.hide() : $top.show()
                });
            },
            lazyload: function(){
                $(".c2c-wrapper").lazyload(function(){});
            },
            init:function(){
                alert(this.lazyload)
            },

            swiper: function($ele) {
                $ele.each(function(i, e) {
                    var $this = $(e);
                    var liLength = $this.find('.nav-slide-trigger li').length;

                    Swipe($this[0], {
                        speed: 400,
                        auto : 5000,
                        callback: function(a, i) {
                            var M = $this.find('img');
                            if (liLength == 2) {
                                $this.find(".nav-slide-trigger").find("li").eq(a%2).addClass("cur").siblings().removeClass("cur");
                            } else {
                                $this.find(".nav-slide-trigger").find("li").eq(a).addClass("cur").siblings().removeClass("cur");
                            }

                            var P = M.eq(a);
                            var N = P.attr("data-src");
                            if (N != undefined && N != "done") {
                                !P.hasClass("lazyimg") && P.addClass("lazyimg");
                                P.attr("src", P.attr("data-src"));
                                P.attr("data-src", "done")
                            }
                        }
                    })
                })
            }
        };
    })(window,document,Zepto);
 
(function(){
    bank.goTop();
    bank.lazyload();
    bank.swiper($(document).find('.index-slide-box'));
    $('#formHref').attr('href',"form.htm?r="+Math.random());
})();