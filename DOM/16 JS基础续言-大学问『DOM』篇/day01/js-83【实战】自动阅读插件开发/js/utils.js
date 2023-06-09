/**
 * 添加事件
 * @param {元素} el
 * @param {类型} type
 * @param {回调函数} fn
 */
function addEvent(el,type,fn){
    if(el.addEventListener){
        el.addEventListener(type,fn,false);
    }else if(el.attachEvent){
        el.attachEvent('on'+type,function(){
            handle.call(el);
        });
    }else{
        el['on'+type] = fn;
    }
}


/**
 * 获取滚动条距离
 * @returns {{top: number, left: number}}
 */
function getScrollOffset(){
    if(window.pageXOffset){
        return{
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else{
        return{
            left: document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

/**
 * 返回顶部公共方法
 */
function returnTop(){
    window.scroll(0,0);
}

function getViewportSize(){
    if(window.innerWidth){
        return{
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else{
        if(document.compatMode === "BackCompat"){
            return{
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        }else{
            return{
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
    }
}




function getScrollSize(){
    if(document.body.scrollHeight){
        return{
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
        }
    }else{
        return{
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight
        }
    }
}