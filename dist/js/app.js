
$(".hamburger-menu").click(function(){
    $(".bar-board").toggleClass("bar-hide")
    $(".about-links").css("display", "none");
})
$(".nav-link-about").click(function(){
    $(".about-links").toggleClass("slide-up")
    $(".about-links").slideDown("slow")
        $(".fa-chevron-down").css("transform", "rotate(90deg)")
    

        $(".nav-link-about").click(function(){
   if($(".about-links").hasClass("slide-up")){
       $(".about-links").slideUp("slow")
        $(".fa-chevron-down").css("transform", "rotate(0deg)")
   }
});
})