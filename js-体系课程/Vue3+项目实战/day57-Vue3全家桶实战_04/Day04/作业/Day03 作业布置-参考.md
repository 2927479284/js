# Day03 作业布置

## 一. 完成上课所有的代码练习

OK



## 二. 自己独立完成购物车案例（不用看任何一行我的代码）

OK





## 三. 什么是双向绑定？v-model的本质是什么？

双向绑定:

* 即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化
* v-model 是语法糖，它负责监听用户的输入事件来更新数据

v-model的原理

* v-bind绑定value属性的值
* v-on绑定input事件监听到函数,函数会获取最新的值赋值到绑定的属性中

```html
 <input type="text" :value="message" @input="message = $event.target.value" />
```



## 四. 什么是组件化开发？有什么作用？

* 组件化开发

  * 我们将一个完整的页面分成很多个组件；

  * 每个组件都用于实现页面的一个功能块；
  * 而每一个组件又可以进行细分；
  * 而组件本身又可以在多个地方进行复用

* 作用

  * 可复用
  * 方便整个页面的管理和维护





## 五. Vue中注册全局组件和局部组件有什么区别？

* 全局组件：在任何其他的组件中都可以使用的组件；

* 局部组件：只有在注册的组件中才能使用的组件





## 六. 什么是Vue CLI，如何使用它创建Vue项目？

* Vue CLI

  * Vue的脚手架,可以通过它选择项目的配置,并且创建出我们的项目
  * Vue CLI已经内置了webpack相关的配置，我们不需要从零来配置

- Vue CLI 的安装和使用

```bash
# 安装
npm install @vue/cli -g

# 升级
npm update @vue/cli -g

# 使用
vue create 项目的名称
```



## 七. 自己整理Vue项目目录结构中各个文件的作用



```
node_modules:  安装的所有依赖包

public： public目录存放的是一些公用文件
   ---favicon.ico  图标
   ---index.html   打包webpack时所需要的的HTML 模板
   
src  存放vue项目的源代码
   --assets: 资源文件,比如存放css,图片等资源
   --components: 组件文件夹
   --APP.vue   根组件
   --main.js  项目的入口文件
   
.browserslistrc    设置目标浏览器,进行浏览器适配

.gitignore     git的忽略文件

babel.config.js    babel的配置

jsconfig.json   给vscode进行读取,vscode在读取到其中的内容时,给我们代码更加友好的提示

package-lock.json    项目包的锁定文件,npm install 可以通过package-lock文件来检测lock中包的版本是否和package.json中一致 ---一致,会优先查找缓存,不一致,就会重新构建依赖关系

package.json  npm配置文件,记录这你项目的名称,版本号,项目描述,也记录项目所依赖的其他库的信息和依赖库的版本号

README.md    项目说明(描述)

vue.config.js   vue 的配置文件
```







































