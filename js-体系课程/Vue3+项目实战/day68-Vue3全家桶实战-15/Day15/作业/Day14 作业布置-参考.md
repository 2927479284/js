# Day14 作业布置

## 一. 完成课堂所有的代码(项目代码)

已完成





## 二. 如何自定义指令，自定义指令的两种方式和生命周期？

自定义指令可以通过局部定义和全局定义来实现，这两种方式都可以对DOM元素进行底层操作 :

* 自定义局部指令 (组件中通过directives选项，只能在当前组件中使用)
  * 示例 :

``` vue
<script>
    //局部定义v-focus指令:
    export default {
        directives: {
            focus: {
                mounted(el) {
                    el.focus
                }
            }
        }
    }
</script>
```



* 自定义全局指令 (app的directive方法，可以在任意组件中被使用)
  * 示例 :

``` vue
<script>
    //全局定义指令 :
    app.directive("focus", {
        mounted(el) {
            el.focus()
        }
    })
</script>
```



指令的生命周期 :

◼ created：在绑定元素的 attribute 或事件监听器被应用之前调用； 

◼ beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用； 

◼ mounted：在绑定元素的父组件被挂载后调用； 

◼ beforeUpdate：在更新包含组件的 VNode 之前调用； 

◼ updated：在包含组件的 VNode 及其子组件的 VNode更新后调用； 

◼ beforeUnmount：在卸载绑定元素的父组件之前调用； 

◼ unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次



## 三. Vue中如何安装插件，插件的使用过程是什么？

Vue中安装插件主要有两种编写方式 :

* 编写对象类型 (一个对象，但是必须包含一个install的函数) 
  * 示例 :

``` vue
<script>
    //对象类型:
    export default {
        name: "wzl",
        install(app, options) {
            console.log("插件被安装:", app, options)
        }
    }
</script>
```



* 编写函数类型 (一个function,会在安装插件时自动执行)
  * 示例 :

``` vue
<script>
    //编写函数类型 :
    export default function(app, options) {
        console.log("插件被安装:", app, options)
    }
</script>
```





## 四. 继续完成《弘源旅途》的项目代码（自己完成、多写几遍）



























































