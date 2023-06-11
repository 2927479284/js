
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
        inputShow = false,
        isEdit = false,
        curIdx = null;

    addEvent(plusBtn,'click',function (){
        if (inputShow){
            inputArea.style.display = 'none';
            inputShow = false;
            isEdit = false;
            curIdx = null;
            itemContent.value = '';
            addItem.innerText = '增加项目';
        }else {
            inputArea.style.display = 'block';
            inputShow = true;
        }
    });


    addEvent(oList,'click',function (event){
        var e = event || window.event,
            tar = e.target || e.srcElement,
            className = tar.className,
            liParent = elemParent(tar,2),
            oItems = document.getElementsByClassName('item');
        console.log(liParent);
        if (className === 'edit-btn fa fa-edit'){
            var itemLen = oItems.length,
                tarIdx = Array.prototype.indexOf.call(oItems,liParent),
                item;
            console.log('itemLen: '+itemLen);
            console.log('tarIdx: '+tarIdx);
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

    addEvent(addItem,'click',function (){
        var content = itemContent.value,
            contentLen = content.length,
            oItems = document.getElementsByClassName('item'),
            itemLen = oItems.length,
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
            var itemP = elemChildren(oItems[curIdx])[0];
            itemP.innerText = content;
            addItem.innerText = '增加项目';
            isEdit = false;
            curIdx = null;
        }else {
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