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
 * 获取指定元素节点下的元素节点（排除文本，注释节点那些）
 * @param node
 * @returns {{splice: {(start: number, deleteCount?: number): unknown[], (start: number, deleteCount: number, ...items: unknown[]): unknown[]}, length: number, push: (...items: unknown[]) => number}}
 */
function elemChildren(node){
    var obj = {
        length:0,
        push:Array.prototype.push,
        splice:Array.prototype.splice
    };
    var childNodes = node.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType  === 1){
            //说明是元素节点
            obj.push(childNodes[i]);
        }
    }
    return obj;
}


/**
 * 返回指定节点的父元素节点，可以填写指定位置
 * @param node 目标元素
 * @param n 负级(几层)
 * @returns {undefined|*|(() => (Node | null))|ParentNode|ActiveX.IXMLDOMNode}
 */
function elemParent(node,n){
    var type = typeof (n);
    if (type === 'undefined'){
        return node.parentNode;
    }else if(n<=0 || type !== 'number'){
        return undefined;
    }
    while (n){
        node = node.parentNode;
        n--;
    }
    return node;
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