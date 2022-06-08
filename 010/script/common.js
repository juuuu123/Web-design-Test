$(document).ready(function(){
   //menu
   $(".mainmenu>li").hover(function(){
       $(this).find(".submenu").stop().slideDown(500);
   },function(){
      $(this).find(".submenu").stop().slideUp(500);
   });
   //slide
   var num=1;
   $("main li:first-child").fadeIn(0);
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
   //pop
   $(".notice>li:first-child").click(function(){
       $(".popwrap").show();
   });
   $(".close").click(function(){
    $(".popwrap").hide();
});
});