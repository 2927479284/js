;(function(window, $) {

  function request(config) {
    // 返回一个Promise
    return $.ajax({
      timeout: config.timeout || 5000,
      url: config.url || '',
      methods: config.methods || 'GET',
      data: config.data || {},
      headers: config.headers || {}
    })
  }

  function get(url, config = {}) {
    // 返回一个Promise
    return request({
      url,
      methods: 'GET',
      ...config
    })
  }

  function post(url, data = {}, config = {}) {
    return request({
      url,
      methods: 'POST',
      data,
      ...config
    })
  }


  window.HyReq = {
    request,
    get,
    post
  }

})(window, jQuery)