"use strict";

$(window).on("load", function() {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder")
    .delay(400)
    .fadeOut("slow");
});

(function($) {
  /*------------------
		Background set
	--------------------*/
  $(".set-bg").each(function() {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  $(".review-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true
  });

  $(".progress-bar-style").each(function() {
    var progress = $(this).data("progress");
    var prog_width = progress + "%";
    if (progress <= 100) {
      $(this).append(
        '<div class="bar-inner" style="width:' +
          prog_width +
          '"><span>' +
          prog_width +
          "</span></div>"
      );
    } else {
      $(this).append(
        '<div class="bar-inner" style="width:100%"><span>' +
          prog_width +
          "</span></div>"
      );
    }
  });

  $(".lan-prog").each(function() {
    var progress = $(this).data("lanprogesss");
    var ele = "<span></span>";
    var ele_fade = '<span class="fade-ele"></span>';

    for (var i = 1; i <= 5; i++) {
      if (i <= progress) {
        $(this).append(ele);
      } else {
        $(this).append(ele_fade);
      }
    }
  });

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    console.log(cname + "=" + cvalue + ";" + expires + ";path=/");
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  cookieMessage();
  function cookieMessage() {
    var accepted = getCookie("accept");
    if (accepted == "") {
      console.log("true");
      setCookie("accept", "accepted", 365);
      document.getElementById("cook").innerHTML =
        '<div class="cookie-ask" id="cookieAsk"><a class="close" onclick="document.getElementById(&apos;cookieAsk&apos;).style.display=&apos;none&apos;;">&Cross;</a><p class="content">I&apos;m Sorry. This website uses cookies as any websites do. To know how many people visit this.</p></div>';
    }
  }

  /*------------------
		Popup
	--------------------*/
  $(".portfolio-item .port-pic").magnificPopup({
    type: "image",
    mainClass: "img-popup-warp",
    removalDelay: 500
  });

  if ($().circleProgress) {
    //Set progress circle 1
    $("#progress1").circleProgress({
      value: 0.75,
      size: 175,
      thickness: 2,
      fill: "#40424a",
      emptyFill: "rgba(0, 0, 0, 0)"
    });
    //Set progress circle 2
    $("#progress2").circleProgress({
      value: 0.83,
      size: 175,
      thickness: 2,
      fill: "#40424a",
      emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle white
    $("#progress3").circleProgress({
      value: 0.75,
      size: 175,
      thickness: 2,
      fill: "#ffffff",
      emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle white
    $("#progress4").circleProgress({
      value: 0.83,
      size: 175,
      thickness: 2,
      fill: "#ffffff",
      emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress5").circleProgress({
      value: 0.75,
      size: 175,
      thickness: 2,
      fill: "#009fff",
      emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress6").circleProgress({
      value: 0.83,
      size: 175,
      thickness: 2,
      fill: "#009fff",
      emptyFill: "rgba(0, 0, 0, 0)"
    });
  }
})(jQuery);
