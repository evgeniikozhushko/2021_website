function showWorkItems() {
    $("#work .open").unbind("click").on("click",function(){
        var $this = $(this);

        $this.css({"width":"100%"});
        $this.children(".headerspace").css({"height":"50px"});
        $this.children(".portfolio-item").slideDown(150);
        $this.removeClass("open").addClass("close");

        closeWorkItems();
    });
}

function closeWorkItems(){

    $("#work .close").unbind("click").on("click",function(){
        var $this = $(this);
        $this.children(".headerspace").css({"height":"300px"});
        $this.removeClass("close").addClass("open");
        showWorkItems();
        $this.children(".portfolio-item").slideUp(150,function(){
            var w = $this.width()/3-80;
            $this.css({"width":w+"px"});
        });
    });
}

$(document).ready(function(){
    showWorkItems();
});