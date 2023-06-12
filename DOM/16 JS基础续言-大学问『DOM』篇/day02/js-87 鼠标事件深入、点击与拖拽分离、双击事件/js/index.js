Element.prototype.dragNclick = (function (elemClick){
    var bTime = 0,
        eTime = 0,
        oPos = [],
        wWidth = getViewportSize().width,
        wHeight = getViewportSize().height,
        eleWidth = getStyles(this,'width'),
        eleHeight = getStyles(this,'height');



    // 改变this指向
    elemDrag.call(this);
    function elemDrag() {
        var x,
            y,
            _self = this;
        addEvent(this, 'mousedown', function (e) {
            console.log(this);
            bTime = new Date().getTime();
            x = pagePos(e).x - getStyles(this, 'left');// 当前鼠标位置left - 当前元素的距离左边的长度left
            y = pagePos(e).y - getStyles(this, 'top');
            oPos = [getStyles(this,'left'),getStyles(this,'top')];
            addEvent(document, 'mousemove', mouseMove);
            addEvent(document, 'mouseup', mouseUp);
            cancelBubble(e);
            preventDefaultEvent(e);
        });

        function mouseMove(e) {
            var eleLeft = pagePos(e).x - x,
                eleTop = pagePos(e).y - y;
            if (eleLeft <= 0){
                eleLeft = 0;
            }else if(eleLeft >= wWidth - eleWidth){
                eleLeft = wWidth - eleWidth;
            }
            if (eleTop <= 0){
                eleTop = 0;
            }else if (eleTop >= wHeight - eleHeight){
                eleTop = wHeight - eleHeight;
            }

            _self.style.left = eleLeft + 'px';
            _self.style.top = eleTop + 'px';

        }

        function mouseUp(e) {
            eTime = new Date().getTime();
            if (eTime - bTime < 1000){
                _self.style.left = oPos[0] + 'px';
                _self.style.top = oPos[1] + 'px';
                elemClick();
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
