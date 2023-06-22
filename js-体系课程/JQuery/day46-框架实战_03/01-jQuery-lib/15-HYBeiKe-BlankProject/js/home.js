$(function () {

  let $searchHouseInput = $('.header .house-search')
  let $searchList = $('.header .search-list')
  let $searchTips = $('.header .search-tips')
  let $searchMenuUl = $('.header .search-menu > ul')
  let $searchMenuArrow = $('.header .arrow')

  let cacheSearchListData = []  // 将热门推荐的数据缓存到这个数组中
  let homePageInfoData = {} // 首页的所有的数据

  let currentSearchPlaceHolder = '请输入区域、商圈或小区名开始'
  let currentSearchBarSelector = 'site'

  /**
   * 热门搜索输入框获取焦点时绑定事件
   */
  $searchHouseInput.on('focus', function() {
    // 如果 input 有数据,应该搜索
    let value = $(this).val()

    if(value.trim()){
      // 搜索房子 ( 通过代码来模拟用户的输入事件 )
      console.log("value："+value);
      $(this).trigger('input')
      return
    }
    if (cacheSearchListData.length) {
      // 渲染数据
      renderSearchList(cacheSearchListData);
      return;
    }
      // 1.发起网络请求获取 热门推荐的数据
      HyReq.get1(HYAPI.HOT_RECOMMEND).then((res) => {
        // 1.获取到所有的数组
        console.log(res);
        let searchListData = res.rent_house_list.list || []
        if (!searchListData) {
          return;
        }
        searchListData = searchListData.map((item) => {
          return {
            title: item.app_house_title
          }
        });
        // 保存到内存当中进行缓存数据
        cacheSearchListData = searchListData;
        // 渲染数据
        renderSearchList(cacheSearchListData);
      });
  });


  $searchHouseInput.on('input', debounce( function() {
    let value = $(this).val()
    // url?key=value
    // data: { }
    console.log(homePageInfoData);
    let curLocation = homePageInfoData.curLocation
    // console.log(curLocation)  // {city: '广州', cityCode: '440100'}
    HyReq.get1(HYAPI.HOME_SEARCH, {
      cityId: curLocation.cityCode,
      cityName: curLocation.city,
      // channel: 'site',
      channel: currentSearchBarSelector,
      keyword: value,
      query: value
    })
        .then(function(res) {
          // console.log(res.data.result)
          let searchData = res.data.result || []
          // 将复杂的数组转成简单的数组
          searchListData = searchData.map(function(item) {
            return {
              title: item.hlsText || item.text
            }
          })
          // 渲染列表
          renderSearchList(searchListData)
        })
  }))


  $searchMenuUl.on('click', 'li', function() {
    // 1.修改li的高亮
    let $li = $(this)
    $li.addClass('active').siblings().removeClass('active')

    // 2.移动箭头
    let liWidth = $li.width()
    let position = $li.position()
    let arrowLeft = position.left + ( liWidth / 2 )
    $searchMenuArrow.css('left', arrowLeft)

    // 3.修改placeholder
    $searchHouseInput.prop({
      placeholder: currentSearchPlaceHolder + $li.text()
    })

    // 4. 拿到 li 中绑定的 key
    // console.log($li.data('key'))
    currentSearchBarSelector = $li.data('key')

  });

  initPage();





  /**
   * 初始化页面
   */
  function initPage() {
    HyReq.get1( HYAPI.HOME_PAGE_INFO).then((res)=>{
      renderHeaderAddress(res);
      homePageInfoData = res;
      // 2.渲染搜索栏
      renderSearchBar(res)
    }).catch((error)=>{
      console.log(error);
    })
  }

  function renderSearchBar(res) {
    let searchBarData = res.searchMenus || []
    console.log(searchBarData)
    let htmlString = ''
    searchBarData.forEach(function(item, index) {
      let active = index === 0 ? 'active' : ''
      htmlString += `
      <li class="item ${active}" data-key="${item.key}"><span>${item.title}</span></li>
      `
    })
    $searchMenuUl.empty().append(htmlString)
  }

  /**
   * 渲染头部地址
   * @param res 结果数据
   */
  function renderHeaderAddress(res) {
    // 1.更新左上角的地址
    let addr = res.curLocation || {}
    console.log(addr);
    $('.header .address').text(addr.city)
  }


  /**
   * 渲染首页首页下拉框数据
   * @param searchListData
   */
  function renderSearchList(searchListData = []) {
    // 渲染界面
    let htmlString = `<li><span>热门搜索</span></li> `

    searchListData.forEach(function(item) {
      htmlString += `
       <li><span>${item.title}</span></li>
       `
    })
    $searchList.empty().append(htmlString)
    $searchTips.css('display', 'block')
  }


  /**
   * 当输入框失去焦点时绑定事件 将当前输入框隐藏
   */
  $searchHouseInput.on('blur', function()  {
    $searchTips.css('display', 'none')
  });


})


