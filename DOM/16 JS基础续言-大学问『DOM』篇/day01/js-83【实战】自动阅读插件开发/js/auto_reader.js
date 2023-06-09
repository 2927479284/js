var AutoReader = (function (){
    var wHeight = getViewportSize().height,
        sHeight = getScrollSize().height,
        playing = false,
        t = null;
    var AutoReader = function (opt){
        this.playBtn = opt.playBtn;
        this.sTopBtn = opt.sTopBtn;
        var _self = this;

        // 先返回顶部
        addEvent(this.sTopBtn,'click',function (){
            _self.sTopBtnStop();
        });
        // 监听滚动条滚动事件
        addEvent(window,'scroll',function (){
            _self.sTopBtnShow();
        });
        // 自动开始阅读
        addEvent(this.playBtn,"click",function(){
            _self.setAutoPlay.call(_self.playBtn);
        });
    }

    AutoReader.prototype.sTopBtnShow = function (){
        var sTop = getScrollOffset().top;
        sTop ? this.sTopBtn.style.display = 'block'
            : this.sTopBtn.style.display = 'none';
    }

    AutoReader.prototype.sTopBtnStop = function (){
        returnTop();
    }

    AutoReader.prototype.setAutoPlay = function (){
        console.log(playing);
        var sTop = getScrollOffset().top,
            _self = this;
        // _self == <a href="javascript:;" className="round s-play-btn"></a>
        console.log(_self);

        if (sHeight === wHeight + sTop){
            return;
        }
        if (!playing){
            t = setInterval(function(){
                var sTop = getScrollOffset().top;
                if(sHeight <= wHeight + sTop){
                    console.log('底部1');
                    clearInterval(t);
                    _self.style.backgroundImage = 'url(./img/play.png)';
                    playing = false;
                }else{
                    window.scrollBy(0,1);
                    console.log('正在前往底部');
                    _self.style.backgroundImage = 'url(./img/pause.png)';
                }
            },1);
            playing = true;
        }else{
            // 暂停
            clearInterval(t);
            this.style.backgroundImage = 'url(./img/play.png)';
            playing = false;
            returnTop();
        }
    }

    return AutoReader;
})();