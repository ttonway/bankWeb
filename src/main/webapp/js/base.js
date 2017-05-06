var secondHand = secondHand || (function(Win,Doc,$,undefined){
        var test;
        return {
            goTop: function(){
                var height = window.innerHeight || window.screen.height,
                    $top = $("#Top");
                $(window).on("scroll", function() {
                    window.pageYOffset < 1 * height ? $top.hide() : $top.show()
                });
            }
        }
    })(window,document,Zepto);

$(function(){
    secondHand.goTop();
    //secondHand.getLocation();
});
