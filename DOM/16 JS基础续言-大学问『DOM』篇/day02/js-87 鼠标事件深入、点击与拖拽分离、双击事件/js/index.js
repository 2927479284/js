Element.prototype.dragNclick = (function (div,elemClick){
    var bTime = 0,
        eTime = 0,
        oPos = [],
        cbTime = 0,
        ceTime = 0,
        counter = 0,
        t = null,
        wWidth = getViewportSize().width,
        wHeight = getViewportSize().height,
        eleWidth = getStyles(this,'width'),
        eleHeight = getStyles(this,'height'),
        mWidth = getStyles(div,'width'),
        mHeight = getStyles(div,'height');



    // 改变this指向
    elemDrag.call(this);
    function elemDrag() {
        var x,
            y,
            _self = this;
        addEvent(this, 'mousedown', function (e) {
            var btnCode = e.button;
            if (btnCode === 2 ){
                // 鼠标右键
                var mLeft = pagePos(e).x,
                    mTop = pagePos(e).y;
                if (mLeft <= 0){
                    mLeft = 0;
                }else if (mLeft >= wWidth - mWidth){
                    mLeft = pagePos(e).x - mWidth;
                }
                if (mTop<=0){
                    mTop = 0;
                }else if(mTop >= wHeight - mHeight){
                    mTop = pagePos(e).y - mHeight;
                }
                div.style.left = mLeft + "px";
                div.style.top = mTop + "px";
                div.style.display = "block";
            }else if (btnCode === 0) {
                // 鼠标左键
                bTime = new Date().getTime();
                x = pagePos(e).x - getStyles(this, 'left');// 当前鼠标位置left - 当前元素的距离左边的长度left
                y = pagePos(e).y - getStyles(this, 'top');
                oPos = [getStyles(this, 'left'), getStyles(this, 'top')];
                addEvent(document, 'mousemove', mouseMove);
                addEvent(document, 'mouseup', mouseUp);
                cancelBubble(e);
                preventDefaultEvent(e);
            }
        });


        // 清楚 右键默认事件
        addEvent(document,'contextmenu',function (e){
            preventDefaultEvent(e);
        });
        // document 添加左键点击事件 让div = none
        addEvent(document,'click',function (){
            div.style.display = 'none';
        });

        // div 清除默认冒泡
        addEvent(div,'click',function (e){
            cancelBubble(e);
        });

        function mouseMove(e) {
            var eleLeft = pagePos(e).x - x,
                eleTop = pagePos(e).y - y;
            if (eleLeft <= 0){
                eleLeft = 0;
            }else if(eleLeft >= wWidth - eleWidth){
                eleLeft = wWidth - eleWidth - 1;
            }
            if (eleTop <= 0){
                eleTop = 0;
            }else if (eleTop >= wHeight - eleHeight){
                eleTop = wHeight - eleHeight - 1;
            }

            _self.style.left = eleLeft + 'px';
            _self.style.top = eleTop + 'px';

        }

        function mouseUp(e) {
            eTime = new Date().getTime();
            if (eTime - bTime < 100){
                _self.style.left = oPos[0] + 'px';
                _self.style.top = oPos[1] + 'px';
                counter++;
                if (counter === 1){
                    cbTime = new Date().getTime();
                }
                if (counter === 2){
                    ceTime = new Date().getTime();
                }

                if (cbTime && ceTime &&(ceTime - cbTime < 200)){
                    elemClick();
                }

                t = setTimeout(function () {
                    cbTime = 0;
                    ceTime = 0;
                    counter = 0;
                    clearTimeout(t);
                },200);

            }
            removeEvent(document, 'mousemove', mouseMove);
            removeEvent(document, 'mouseup', mouseUp);
        }
    }
})
/*
function init(){
    dragNclick(1);
}

init();*/
