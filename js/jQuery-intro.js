$("h3").click(function() {
     //  $(this).next().slideToggle(500);
     // //  $(this).next().fadeToggle(1000);
     //    if($(this).next().children("img").css("display")==="none"){
     //         $(this).next().children("img").delay(700).slideToggle(800);
     //         $(this).next().children("p").fadeToggle(600);
     //  } else {
     //         $(this).next().children("img").slideToggle(800);
     //         $(this).next().children("p").delay(700).fadeToggle(600);
     //    }
     if ($(this).next().css("opacity") === "1") {
     }
     $(this).next().animate({
          opacity: 0,
          width: 0,
          height: 0
     }, 1000);
     } else if ($(this).next().css("opacity") === "0")
});
