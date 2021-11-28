$(document).ready(function(){
    $("#work .open").click(function(){
        $(this).css({"width":"100%"});
        $(this).children(".portfolio-item").slideDown();
        
        $(this).removeClass("open").addClass("close");
        
        $(".close").click(function(){
            $(this).children(".portfolio-item").slideUp();
            $(this).removeClass("close").addClass("open");
        });
    });
});