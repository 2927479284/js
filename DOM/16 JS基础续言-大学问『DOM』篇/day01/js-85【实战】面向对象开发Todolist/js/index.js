
init();
function init(){
    // initTodoList;
}

(function (){
    var plusBtn = document.getElementsByClassName('j-plus-btn')[0],
        inputArea = document.getElementsByClassName('input-wrap')[0],
        itemContent = document.getElementById('itemContent'),
        addItem = document.getElementsByClassName('j-add-item')[0],
        oList = document.getElementsByClassName('item-list')[0],
        inputShow = false,//是否隐藏输入框
        isEdit = false,// 是否编辑
        curIdx = null;

    // 弹出输入框 新增/编辑数据
    addEvent(plusBtn,'click',function (){
        if (inputShow){
            inputArea.style.display = 'none';
            inputShow = false;
            isEdit = false;
            curIdx = null;
            itemContent.value = '';
            addItem.innerText = '增加项目';
        }else {
            // 状态为false 时候 隐藏状态 所以这里需要把他开启
            inputArea.style.display = 'block';
            inputShow = true;
        }
    });

    // 这里采用的是事件代理 点击的是li 通过传入的事件源进行判断
    // 点击ul中的li 编辑/删除
    addEvent(oList,'click',function (event){
        var e = event || window.event,
            tar = e.target || e.srcElement,
            className = tar.className,
            liParent = elemParent(tar,2),
            oItems = document.getElementsByClassName('item');// 获取ul下面的所有li
        if (className === 'edit-btn fa fa-edit'){
            var itemLen = oItems.length,// 当前li的总长度
                tarIdx = Array.prototype.indexOf.call(oItems,liParent),// 当前li元素 在li列表中的位置
                item;
            inputArea.style.display = 'block';
            inputShow = true;
            for (var i = 0; i < itemLen; i++) {
                item = oItems[i];
                item.className = 'item';
            }
            curIdx = tarIdx;
            liParent.className += ' active';
            addItem.innerText = '编辑第：'+(curIdx+1)+' 项';
            isEdit = true;

        }else if (className === 'remove-btn fa fa-times'){
            liParent.remove();
        }
    });

    // 输入框输入数据 点击确定按钮 新增/编辑
    addEvent(addItem,'click',function (){
        var content = itemContent.value,// 输入框里面的数据
            contentLen = content.length,// 输入框里面数据的长度
            oItems = document.getElementsByClassName('item'),// 获取ul下面的所有li
            itemLen = oItems.length,// 当前li的总长度
            item;
        if (contentLen<=0){
            return;
        }

        if (itemLen>0){
            for (var i = 0; i < itemLen; i++) {
                itemText = elemChildren(oItems[i])[0].innerText;
                if (itemText === content){
                    alert('不能输入重复数据');
                    return;
                }
            }
        }
        if (isEdit){
            // 编辑 为 true 时
            var itemP = elemChildren(oItems[curIdx])[0];
            itemP.innerText = content;
            addItem.innerText = '增加项目';
            isEdit = false;
            curIdx = null;
        }else {
            // 新增 为 false 时
            var oLi = document.createElement('li');
            oLi.className = 'item';
            oLi.innerHTML = itemTpl(content);
            oList.appendChild(oLi);
        }
        inputArea.style.display = 'none';
        inputShow = false;
        itemContent.value = '';
    });



    function itemTpl(text){
        return(
            '<p class="item-content">'+ text +'</p>'+
            '<div class="btn-group">'+
                '<a href="javascript:;" class="edit-btn fa fa-edit"></a>'+
                '<a href="javascript:;" class="remove-btn fa fa-times"></a>'+
            '</div>'
        );
    }
})();