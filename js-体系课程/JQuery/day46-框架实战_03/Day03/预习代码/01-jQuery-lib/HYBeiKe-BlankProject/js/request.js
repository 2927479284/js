;((window,$)=>{
  let request = (config)=>{
    return $.ajax({
      timeout: config.timeout || 5000,
      url: config.url || '',
      method: config.method || 'GET',
      data: config.data || {},
      headers: config.headers || {}
    });
  }


  /**
   * 封装GET方法
   * @param url 地址
   * @param data 数据
   * @param config 配置
   * @returns {*}
   */
  let get1 = (url,data={},config = {})=>{
    return request(
        {
          url: url,
          method: "GET",
          data: data,
          ...config
        }
    );
  }

  /**
   * 封装POST方法
   * @param url 地址
   * @param data 数据
   * @param config 配置
   * @returns {*}
   */
  let post1 = (url,data={},config={})=>{
    return request(
        {
          url: url,
          method: "POST",
          data: data,
          ...config
        }
    );
  }
  window.HyReq  = {
    request: request,
    get1: get1,
    post1: post1
  }

})(window,jQuery);