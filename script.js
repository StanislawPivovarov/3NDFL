$(document).ready(function (){
    // 
    $(".header-list-buy-appart").click(function () {
      $(this).next().slideToggle(500);
      $(".subdescription-list").not($(this).next()).slideUp(500);
      $(".arrow-list-buy").css({'transform':'rotate(90deg)'});
      
    });
    $(".header-list-sell-appart").click(function () {
        $(this).next().slideToggle(500);
        $(".subdescription-list").not($(this).next()).slideUp(500);
        $(".arrow-list-sell").css({'transform':'rotate(90deg)'});
        
      });
      $(".header-list-rent").click(function () {
        $(this).next().slideToggle(500);
        $(".subdescription-list").not($(this).next()).slideUp(500);
        $(".arrow-list-rent").css({'transform':'rotate(90deg)'});
        
      });
      $(".header-list-medical").click(function () {
        $(this).next().slideToggle(500);
        $(".subdescription-list").not($(this).next()).slideUp(500);
        $(".arrow-list-med").css({'transform':'rotate(90deg)'});
        
      });
      $(".header-list-education").click(function () {
        $(this).next().slideToggle(500);
        $(".subdescription-list").not($(this).next()).slideUp(500);
        $(".arrow-list-edu").css({'transform':'rotate(90deg)'});
        
      });
      $(".header-list-insurance").click(function () {
        $(this).next().slideToggle(500);
        $(".subdescription-list").not($(this).next()).slideUp(500);
        $(".arrow-list-ins").css({'transform':'rotate(90deg)'});
        
      });
      $(".header-list-investions").click(function () {
        $(this).next().slideToggle(500);
        $(".subdescription-list").not($(this).next()).slideUp(500);
        $(".arrow-list-inv").css({'transform':'rotate(90deg)'});
        
      });
    
  });