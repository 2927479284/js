var btnTop = document.getElementsByClassName("s-top-btn")[0],
    header = document.getElementsByClassName("list-header")[0];
addEvent(window,"scroll",function(){
    var top = getScrollOffset().top;

    top ? btnTop.style.display = "block"
        : btnTop.style.display = "none";
});

addEvent(btnTop,"click",function(){
    window.scrollTo(0,0);
});

addEvent(header,"click",function(){
    window.scrollTo(0,0);
});