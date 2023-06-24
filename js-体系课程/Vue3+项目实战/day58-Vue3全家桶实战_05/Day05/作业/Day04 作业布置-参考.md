# Day04 作业布置

## 一. 完成上课所有的代码练习







## 二. 说说Vue的runtime和runtime+comiple的版本区别（自己理解）

- runtime版本意味着 没有对模板的编译 需要自己写对应的render函数(返回h函数)或者setup返回一个函数 函数的返回值是h函数
  - 没有将模板转成vnode节点这一过程 
- runtime+comiple 版本 是可以将template模板通过compile转换成对应的vnode节点 



## 三. 父子组件在开发中如何进行通信，并且自己写出案例

父组件数据传入子组件

- ```js
  <child :title="hello " :message="child" :list="[1,2,3]"/>
  ```

子组件接收父组件传入的值

- ```js
  export default {
      // 需要注意的是 传入的数据需要进行注册
      // 如果不注册 则被当作 attr 的参数 可以通过$attr.的方式在template进行访问 或者会自动进行同类型的合并
      props: ["title", "message", "list"] // 数组写法
      props: {
          title: {
              type: String,
              default: "wmm"
          },
      	message: {
            	type: String,
          	default: "111"
          },
           // 对象类型的数据的默认值为一个函数
           list: {
               type: Array,
               default: ()=>([1,2,3])
           },
  }
  }
  ```

- 子组件传递给父组件函数

  - ```js
    export default {
    	emits: ["change"],
      emits: {
        change:payload => {
          // 进行校验 用的比较少
          return true
        }
      }
      setup(props, {emit}){
        const changeClick = (index) => {
          emit("change",index)
        }
        return {
          changeClick
        }
      }
    }
    ```

  - 



## 四. 自己写出TabControl的案例（不看我的代码）







## 五. 说说Vue插槽的作用和平时开发中的应用

插槽: 

- 用于父组件自定义子组件中的个内容 
- 为了让子组件更具有通用性 不必限定死某个元素的类型一定是span/div...

平时开发中的应用:

- 比如在这个页面希望展示的是一个个的span
- 在另一个页面希望展示的是 button 就可以通过预留插槽进行扩展



## 六. 理解作用域插槽以及在什么场景下使用（选做）

作用域插槽

- 有时我们希望父组件可以访问到slot传入到自组件的遍历的内容 就可以使用作用域插槽

- 比如: 

  - ```js
    // father
    <template>
     	<child :list=list>
      	<template #listSlot="{item: { title, age, height}}">
      		<span>
          {{title}} - {{age}} - {{height}}
          </span>
      	</template>
      </child>
    </template>
    <script>
     import {reactive} from "vue"
    	setup(){
        const list = reactive([
           {
             title: "wmm",
             age:20,
             height: 1.84
           },
             {
             title: "wmm1",
             age:21,
             height: 1.86
           },
            {
             title: "wmm2",
             age:22,
             height: 1.88
           },
         ])
          return {
            list
          }
        }      
    </script>
    
    // child
    <template>
     	<child :list=list>
      	<template v-for="item in list">
      		<span>
          	<slot name="listSlot" :item="item">
          	</slot>
          </span>
      	</template>
      </child>
    </template>
    <script>
    props: {
      list: {
        type: Array,
        default:()=>([])
      }
    }
    	setup(){
        const list = reactive([
           {
             title: "wmm",
             age:20,
             height: 1.84
           },
             {
             title: "wmm1",
             age:21,
             height: 1.86
           },
            {
             title: "wmm2",
             age:22,
             height: 1.88
           },
         ])
          return {
            list
          }
        }      
    </script>
    ```

    
    









































