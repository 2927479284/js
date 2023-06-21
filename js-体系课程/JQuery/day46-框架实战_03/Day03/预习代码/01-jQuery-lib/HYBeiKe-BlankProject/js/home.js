$(function () {
  //  http://123.207.32.32:9060/beike/api/homePageInfo
  HyReq.get1("http://123.207.32.32:9060/beike/api/homePageInfo").then((res)=>{
    console.log(res);
  }).catch((error)=>{
    console.log(error);
  })
})