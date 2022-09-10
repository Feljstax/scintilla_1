$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    $("#reserveButton").click(function(){
        $("#reserveDemoModal").modal("show");
    })
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    })
    $("#createAccountButton").click(function(){
        $("#createAccountModal").modal("show");
    })
    $("#createAccountModelAnchor").click(function(){
        $("#createAccountModal").modal("hide");
    })
    $(".reserveDemoButton").click(function() {
        $("#reserveDemoModal").modal("show");
    })
    
});