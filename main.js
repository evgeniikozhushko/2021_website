$(document).ready(function(){
    $("#work .card").on("click",function(){
        var showthis = $(this).data("show");
        $(".work-content").fadeOut(300,function(){
            $(".work-content").data("content",showthis).fadeIn(300);
        });
    });
});
