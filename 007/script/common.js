$(document).ready(function(){
    //menu
    $(".mainnav>li").hover(function(){
        $(this).find(".subnav").stop().slideDown(500);
    },function(){
        $(this).find(".subnav").stop().slideUp(500);
    });

    //slide
    var num=0;
    setInterval(function(){
        if(num<2){
            num++;
        }else{
            num=0;
        }
        //console.log(num);
        $("main ul").animate({left:(num*-1200)},500);
    },3000);

    //pop
    $(".notice li").first().click(function(){
        $(".pop").show();
    });
    $(".pop a").click(function(){
        $(".pop").hide();
    });
});