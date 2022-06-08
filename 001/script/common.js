$(document).ready(function(){
    //menu 
    $(".mainnav>li").hover(function(){
        $(".subnav").stop().slideDown(500);
    },function(){
        $(".subnav").stop().slideUp(500);
    });
    //slide 상하
   // var num=0;
   // var pos=0;
   // setInterval(function(){
   //     num=num+1;
   //     pos=num*-1*300+"px";
   //     $("main ul").animate({top:pos},500,function(){
   //         if(num==3){
   //             num=0;
   //             pos=0;
   //             $("main ul").animate({top:pos},0);
   //         }
   //     });
   // },3000);
    //slide fade
     var num=1;
    $("main li").first().fadeIn(0);

     setInterval(function(){
         if(num<3){
             num=num+1;
             $("main li").fadeOut(500);
             $("main li").eq(num-1).fadeIn(500);
         }else{
             num=1;
             $("main li").fadeOut(500);
             $("main li").first().fadeIn(500);
         }
     },3000);
    //tabmenu
    $("#tab>li>a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
    });
    //popup
    $(".notice li").first().click(function(){
        $(".popbg").show();
    });
    $(".close").click(function(){
        $(".popbg").hide();
    });
});