# Day02 作业布置

## 一. 完成上课所有的代码练习

已完成





## 二. Vue事件绑定如何传递参数？如何传递event参数？

* 情况一：如果该方法不需要额外参数，那么方法后的()可以不添加。 

  * 如果方法本身中有一个参数，那么会默认将原生事件event参数传递进去 

*  情况二：如果需要同时传入某个参数，同时需要event时，可以通过**$event**传入事件。

  

```HTML 
     <!-- 1.默认传递event对象 -->
      <button @click="btnClick">按钮1</button>
      <!-- 2.只传递自己的参数 -->
      <button @click="btnClick2('hello',1111)">按钮2</button>
      <!-- data里的变量 -->
      <button @click="btnClick3(info,name)">按钮2</button>
      <!-- 3.传递自己的参数和event对象 -->
      <!-- 在模板中想要明确的获取event对象: $event -->
      <button @click="btnClick4('哈哈哈哈',$event)">按钮3</button>
```



## 三. v-if和v-show有什么区别？

* 在用法上的区别： 
  * v-show是不支持template； 
  * v-show不可以和v-else一起使用；
* 本质的区别
  * v-show元素无论是否需要显示到浏览器上，它的DOM实际都是有存在的，只是通过CSS的display属性来进行切换； 
  * v-if当条件为false时，其对应的原生压根不会被渲染到DOM中





## 四. v-for中的key有什么作用？什么是虚拟DOM？

* 有key的操作:

  * 根据key找到之前的VNode进行复用;
  * 没有VNode可以复用, 再创建新的VNode

* 没有key的操作:

  * diff算法, 后续VNode复用性就不强

* VNode

  ```
  1.VNode的全称是Virtual Node，也就是虚拟节点
  2.VNode的本质是一个JavaScript的对象
  3.template元素 ->解析成 VNode--->转换为真实DOM元素
  ```

* 虚拟DOM

  * template元素--->一个个VNode虚拟节点--->VNode Tree -->虚拟DOM--->真实DOM

  * 作用
    * 方便进行diff算法
    * 方便进行跨平台





## 五. 什么是计算属性？和method有什么区别？

* 计算属性

  * 可以通过this访问数据
  * 对于任何包含响应式数据的赋值逻辑,你应该使用计算属性

* 和method的区别

  * computed底层会缓存, 性能更高
  * 计算属性会基于它们的依赖关系进行缓存;
  * 在数据不发生变化时，计算属性是不需要重新计算的
  * 但是如果依赖的数据发生变化，在使用时，计算属性依然会重新进行计算

  

  

  

  





## 六. 如何在Vue中侦听一个数据的改变？

```js
      // 侦听器
        watch: {
          // 1,监听message
          // 默认有两个参数:newValue,oldValue
          message(newValue, oldValue) {
            console.log("watch message ,messag发生改变");
            console.log("newValue--", newValue);
            console.log("oldValue---", oldValue);
          },
          // 2.监听info
          info(newValue, oldValue) {
            // 2.如果是对象类型, 那么拿到的是代理对象
            console.log("info--newValue", newValue);
            console.log("info--oldValue", oldValue);
            //3.获取原始对象
            // 方式一:因为代理对象可迭代
            console.log({ ...newValue });
            console.log(Vue.toRaw(newValue));
          },
        },
```

* 侦听的选项

  * deep  深度监听

  * immediate   第一次渲染直接执行一次监听器

    ```js
     // 侦听器
            watch: {
              // 2.监听info
              // 默认watch监听不会进行深度监听
              // info(newValue, oldValue) {
              //   // 2.如果是对象类型, 那么拿到的是代理对象
              //   console.log("info--newValue", newValue);
              //   console.log("info--oldValue", oldValue);
              // },
              info: {
                handler(newValue, oldValue) {
                  // 2.如果是对象类型, 那么拿到的是代理对象
                  console.log("info--newValue", newValue);
                  console.log("info--oldValue", oldValue);
                  console.log(newValue === oldValue); //ture
                },
                // 深度监听
                deep: true,
                // 一开始就会立即执行一次
                immediate: true,
              },
              "info.age": function (newValue, oldValue) {
                console.log("info-age-newVAL", newValue);
                console.log("info-age-oldVAL", oldValue);
              },
            },
    ```

    



## 七. 整理总结今日Vue的知识点内容

已完成









































