// 获取元素

var sTopBtn = document.getElementsByClassName('s-top-btn')[0],
    listHeader = document.getElementsByClassName('list-header')[0];

addEvent(window,'scroll',function (){
    var sTop = getScrollOffset().top;
    sTop ? sTopBtn.style.display = 'block'
         : sTopBtn.style.display = 'none';
});


addEvent(sTopBtn,'click',returnTop);

addEvent(listHeader,'click',returnTop);




