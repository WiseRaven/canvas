$(document).ready(function () {
    $(".hint_close").click(function () {
        $( ".hint_wrapper" ).hide(); 
    });
    $(".hint_background").click(function () {
        $(".hint_wrapper").hide(); 
    });
    $(".withdraw_money").click(function () {
        $(".artworks_wrapper").show(0);
        $(".burger .navigation").removeClass("open");
    }); 
    $(".hint_body .ok").click(function () {
        $( ".hint_wrapper" ).hide(); 
    });
    $(".faq_modal").click(function () {
       $("#faq").show();
       $(".burger .navigation").removeClass("open");
    }); 
    $(".terms").click(function () {
       $("#terms").show();
       $(".burger .navigation").removeClass("open");
    }); 
    $(".privacy").click(function () {
       $("#privacy").show();
       $(".burger .navigation").removeClass("open");
    }); 
    $(".shipping").click(function () {
       $("#shipping").show();
       $(".burger .navigation").removeClass("open");
    });
    $(".user_agreement").click(function () {
       $("#user_agreement").show();
       $(".burger .navigation").removeClass("open");
    });
});
