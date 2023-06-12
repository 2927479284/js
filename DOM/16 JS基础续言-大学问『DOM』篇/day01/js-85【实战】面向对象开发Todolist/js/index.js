var TodoList = (function (node){
    var TodoList = function (){
        this.node = node;
        this.config = this.getConfig();
        this.inputShow = false;
        var _self = this;
        this.isEdit = false;// 是否编辑
        this.curIdx = null;
        this.dConfig = {
            "plusBtn":"",
            "inputArea":"",
            "addBtn":"",
            "list":"",
            "itemClass":""
        }
        // 判断配置json key是否全部存在
        for (var key in this.dConfig) {
            if (!this.config.hasOwnProperty(key)){
                console.log(errorInfo(key));
                return;
            }
        }
        // set配置项
        this.setConfig();

        // 配置显示输入框按钮 监听事件
        addEvent(this.plusBtn,'click',function (){
            // 这里的this 指向的是 plusBtn
            _self.showInput();
        });

        // 新增/编辑 数据
        addEvent(this.addBtn,'click',function (){
            console.log('click');
            _self.addBtnClick();
        });

        addEvent(this.oList,'click',function (event){
            _self.oListClick(event);
        })

    }

    TodoList.prototype = {
        getConfig: function (){
            return JSON.parse(this.node.getAttribute('data-config'));
        },
        setConfig: function (){
            var config = this.config,
                node = this.node;
            this.inputArea = node.getElementsByClassName(config.inputArea)[0];
            this.addBtn = this.inputArea.getElementsByClassName(config.addBtn)[0];
            this.plusBtn = node.getElementsByClassName(config.plusBtn)[0];
            this.oList = node.getElementsByClassName(config.list)[0];
            this.oItems = node.getElementsByClassName(config.itemClass);
            this.content = document.getElementById('itemContent');
        },
        showInput: function (){
            var _self = this;
            if (this.inputShow){
                setInputShow.call(_self,'close');
            }else {
                setInputShow.call(_self,'open');
            }
        },
        addBtnClick:function (){
            var content = this.content.value,
                 _self = this,
                contentLen = content.length,
                oItems = document.getElementsByClassName('item'),
                itemLen = oItems.length,
                text;
            // 判断用户是否输入数据
            if (contentLen<=0){
                console.log("未输入任何值");
                return;
            }
            // 判断用户输入的数据是否存在重复数据
            console.log(oItems);
            if (itemLen>0){
                for (var i = 0; i < itemLen; i++) {
                    text = elemChildren(oItems[i])[0].innerText;
                    if (text === content){
                        alert('数据已存在');
                        return;
                    }
                }
            }
            if (this.isEdit){
                // 编辑
                // p标签
                var p = elemChildren(oItems[this.curIdx])[0];
                p.innerText = content;
                this.addBtn.innerText = "增加项目";
                this.isEdit = false;
                this.curIdx = null;
            }else {
                // 新增
                var oLi = document.createElement('li');
                oLi.className = 'item';
                oLi.innerHTML = itemTpl(content);
                this.oList.appendChild(oLi);
            }
            setInputShow.call(_self,'close');
        },
        oListClick: function (event){

            var e = event || window.event,
                tar = e.target || e.srcElement,
                className = tar.className,
                liParent = elemParent(tar,2),
                oItems = this.oItems,
                itemLen = oItems.length,
                _self = this;
            if (className === 'edit-btn fa fa-edit'){
                console.log(className);
                console.log(liParent);
                console.log(oItems);
                var tarIdx = Array.prototype.indexOf.call(oItems,liParent),
                    item;
                console.log(tarIdx);
                setInputShow.call(_self,'open');
                // 所有样式恢复最初样子
                for (var i = 0; i < itemLen; i++) {
                    item = oItems[i];
                    item.className = 'item';
                }
                this.curIdx = tarIdx;
                liParent.className += ' active';
                this.addBtn.innerText = '编辑：'+(this.curIdx+1)+"项";
                this.isEdit = true;
            }else if (className === 'remove-btn fa fa-times'){
                liParent.remove();
            }
        }
    }
    /**
     * 配置未完善提示
     * @param key
     * @returns {Error}
     */
    function errorInfo(key){
        return new Error(
            '您没有配置参数：'+key+'\n'+
            '必须配置的参数列表如下：\n'+
            '打开输入框按钮元素类名：plusBtn \n'+
            '输入框区域元素类名：inputArea \n'+
            '增加项目按钮元素类名：addBtn \n'+
            '列表承载元素类名：list \n'+
            '列表项承载元素类名：itemClass'
        );
    }

    /**
     * 设置input-warp是否显示/隐藏
     * @param action
     */
    function setInputShow(action){
        if (action === 'open'){
            this.inputArea.style.display = 'block';
            this.inputShow = true;
            this.content.value = '';
        }else {
            this.inputArea.style.display = 'none';
            this.inputShow = false;
            this.content.value = '';
        }
    }

    function itemTpl(text){
        return(
            '<p class="item-content">'+ text +'</p>'+
            '<div class="btn-group">'+
            '<a href="javascript:;" class="edit-btn fa fa-edit"></a>'+
            '<a href="javascript:;" class="remove-btn fa fa-times"></a>'+
            '</div>'
        );
    }

    return TodoList;
})(document.getElementsByClassName('wrap')[0]);