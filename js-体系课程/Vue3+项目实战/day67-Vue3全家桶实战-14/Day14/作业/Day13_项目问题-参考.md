# Day13 作业布置

## 一. 完成上课所有的代码练习







## 二. 理解页面滚动和元素滚动之间的区别和实现

* 重构`useScroll`对页面滚动和元素滚动做出不同的反应
  * 如果是页面滚动  获取的是`document(文档)`客户端 高度(`clientHeight`)    文档上滑高度(`scrollTop`)    文档滑块内容总高度(`scrollHeight`)
  * 如果是元素滚动  获取的不能是文档类的高度   而是元素的客户端的高度(`clientHeight`)   元素上滑高度(`scrollTop`)   元素滑块内容总高度(`scrollHeight`)

```js
// elRef决定的 useScroll 用于页面滚动还是元素的滚动
export default function useScroll(elRef) {
  let el = window

  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  // 用上节流函数
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
        
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了")
      isReachBottom.value = true
    }
  }, 150)
  
  onMounted(() => {
     // 判断是否传入的有元素  有就进入else  否则el = window
    if (elRef) el = elRef.value
    el.addEventListener("scroll", scrollListenerHandler)
  })
  
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}

```









## 三. 课下完成详情页区域的内容展示















































