var Slider = (function (){
    var Slider = function (opt){
        // 获取出传入的数据
        this.sliderItem = document.getElementsByClassName(opt.sliderItem);
        this.thumbsItem = document.getElementsByClassName(opt.thumbsItem);
        this.cur = opt.cur;
        this.active = opt.active;
        this.sliderItemName = opt.sliderItem;
        this.thumbsItemName = opt.thumbsItem;
        this.bindClick();
    }
    Slider.prototype.bindClick = function (){
        var slider = this.sliderItem,
            thumbs = this.thumbsItem,
            cur = this.cur,
            active = this.active,
            sliderItemName = this.sliderItemName,
            thumbsItemName = this.thumbsItemName;

        for (var i = 0; i <thumbs.length; i++) {
            (function (j){
                thumbs[j].onclick = function (){
                    for (var k = 0; k <thumbs.length; k++) {
                        console.log(thumbs[k]);
                        thumbs[k].className = thumbsItemName;
                        slider[k].className = sliderItemName;
                    }
                    this.className += " "+cur;
                    slider[j].className += " "+active;
                }
            })(i);
        }
    }
    return Slider;
})();