(function (doc) {
    var oList = doc.getElementsByClassName('list')[0],
        oItems = oList.getElementsByClassName('list-item'),
        curIdx = 0;

    var init = function () {
        bindEvent();
    }
    init();
    function bindEvent() {
        addEvent(oList,'mouseover',function () {
            addEvent(document,'mousemove',slide);
        });
        addEvent(oList,'mouseout',function () {
            removeEvent(document,'mousemove',slide);
        })
    }
    
    function slide(event) {
        var tar = event.target,
            oParent = getParent(tar,'li'),
            thisIdx = Array.prototype.indexOf.call(oItems,oParent);
        if (curIdx !== thisIdx){
            oItems[curIdx].className = 'list-item';
            curIdx = thisIdx;
            oItems[curIdx].className += ' active';
        }

    }
    
    function getParent(tar,element) {
        while (tar.tagName.toLowerCase() !== element){
            tar = tar.parentNode;
        }
        return tar;
    }
})(document);