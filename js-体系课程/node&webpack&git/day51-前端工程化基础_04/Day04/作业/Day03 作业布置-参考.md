# Day03 作业布置

## 一. 完成上课所有的代码练习

01-path的基本使用

```js
const path = require("path")
const filePath = "D://qianduan/HTML/day01.txt"
//1.获取文件扩展名
console.log(path.extname(filePath))
//2.获取文件名
console.log(path.basename(filePath))
//3.获取文件的父文件夹
//D://qianduan/HTML
console.log(path.dirname(filePath))
//4.路径的拼接
const path1 = "/qianduan/HTML/day02.txt"
const path2 = "../day03/aaa.txt"
console.log(path.join(path1, path2))
```

02-path的resolve 使用

```js
// path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
const path = require("path")
// D:\day03.txt
console.log(path.resolve("./HTML/day01", "../css/day02", "/day03.txt"))
//D:\HTML\css\day02\day03.txt
console.log(path.resolve("/HTML/day01", "../css/day02", "./day03.txt"))
//D:\css\day03.txt
console.log(path.resolve("./HTML/day01", "/css/day02", "../day03.txt"))
console.log(path.resolve("./HTML/day01", "./css/day02", "../day03.txt"))
console.log(path.resolve())
```

03-webpack命令

```
npm install webpack webpack-cli –g # 全局安装
npm install webpack webpack-cli –D # 局部安装
//通过配置来指定入口和出口
npx webpack --entry ./src/main.js --output-path ./build
```

3.1 创建局部的webpack

```
1>创建package.json
npm init
2>安装局部的webpack
npm install webpack webpack-cli -D
3> 使用局部的webpack
npx webpack
4>在package.json中创建scripts脚本,执行脚本打包
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config wk.config.js"
  },
 命令: npm run build
  
```

3.2 在根目录下创建一个webpack.config.js文件，来作为webpack的配置文件

```
const path = require("path")
//导出配置信息
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  }
}
```

再执行npm run build 打包

3.3 指定配置文件--我们将webpack.config.js修改成了 wk.config.js

* 我们可以通过 --config 来指定对应的配置文件

* 在package.json中scripts进行修改

  ```
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack --config wk.config.js"
    },
  
  ```

  再执行npm run build 打包

## 二. 说说npx命令的作用

* npx会到当前目录的node_modules/.bin目录下查找对应的命令
* 如果想要局部的webpack ,可以通过使用npx

```
npx webpack --version

```



## 三. 说说pnpm的原理（软连接、硬链接）和用法



* 软链接(符号链接)
  * 保存某个文件的绝对路径或者相对路径
  * 类似于快捷方式
* 硬链接
  * 是电脑文件系统中的多个文件平等地共享同一个文件存储单元
  *  删除一个文件名字后，还可以用其它名字继续访问该文件
*  当使用 npm 或 Yarn 时，如果你有 100 个项目，并且所有项目都有一个相同的依赖包，那么， 你在硬盘上就需要保存 100 份该相同依赖包的副本
* 为了解决上面的问题,就出现了pnpm,使用pnpm,依赖包将被存放在一个统一的位置
  *  当安装软件包时， 其包含的所有文件都会硬链接到此位置，而不会占用 额外的硬盘空间
  *  这让你可以在项目之间方便地共享相同版本的 依赖包
* pnpm的node_modules是非扁平化的结构
  * 让自己的项目不会随便引入非自己安装的依赖
  * 软连接和硬链接结合
* pnpm的使用

| npm命令             | pnpm等价命令      | 描述                       |
| ------------------- | ----------------- | -------------------------- |
| npm install         | pnpm install      | 安装package.json中的依赖包 |
| npm install <pcg>   | pnpm add <pcg>    | 默认安装开发和生产依赖     |
| npm uninstall <pcg> | pnpm remove <pcg> | 卸载某个依赖包             |
| npm run <cmd>       | pnpm <cmd>        | 运行某个脚本               |



## 四. 什么是webpack，说说你对webpack的理解

* webpack是一个静态的模块化打包工具，为现代的JavaScript应用程序；

* 如下解释
  * 打包bundler：webpack可以将帮助我们进行打包，所以它是一个打包工具
  * 静态的static：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）
  * 模块化module：webpack默认支持各种模块化开发，ES Module、CommonJS、AMD等
  * 现代的modern：我们前端说过，正是因为现代前端开发面临各种各样的问题，才催生了webpack的出现和发展































































