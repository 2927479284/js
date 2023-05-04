;(function(){
    var wHeight = getViewportSize().height,
        sHeight = getScrollSize().height,
        playing = false,
        t = null;
    var AutoReader = function(obj){
        this.playBtn = obj.playBtn;
        this.sTopBtn = obj.sTopBtn;
        var _self = this;
        addEvent(this.sTopBtn,"click",function(){
            window.scrollTo(0,0);
            clearInterval(t);
            _self.playBtnstyle.backgroundImage = 'url(./img/play.png)';
            playing = false;
        });
        addEvent(window,"scroll",function(){
            _self.sTopBtnShow.call(_self);
        });
        addEvent(this.playBtn,"click",function(){
            _self.setAutoPlay.call(_self.playBtn);
        });
    }
    AutoReader.prototype = {
        setAutoPlay: function(){
           var sTop = getScrollOffset().top,
               _self = this;
           if(sHeight === wHeight + sTop){
                return;
           }
           if(!playing){
                t = setInterval(function(){
                    var sTop = getScrollOffset().top;
                    if(sHeight <= wHeight + sTop){
                        clearInterval(t);
                        _self.style.backgroundImage = 'url(./img/play.png)';
                        playing = false;
                    }else{
                        window.scrollBy(0,1);
                        _self.style.backgroundImage = 'url(./img/pause.png)';
                    }
                },1);
                playing = true;
           }else{
            clearInterval(t);
            _self.style.backgroundImage = 'url(./img/play.png)';
            playing = false;
           }
        },
        sTopBtnShow: function(){
            var sTop = getScrollOffset().top,
                sTopBtn = this.sTopBtn;
            sTopBtn.style.display = sTop ? "block" : "none";
        }
    }
    window.AutoReader = AutoReader;
})();