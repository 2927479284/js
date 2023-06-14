

// 1.let 无法同时声明多个一样的变量 （全局跟函数一样 无法重复定义）
// let name = "张三";
// let name = "李四";
// var name = "王五"; let name 已经存在 无法重复定义
// SyntaxError: Identifier 'name' has already been declared


// 2.依然无法重复定义 因为预编译 a 已经被声明了
// function test(a) {
//     let a = 10;
//     console.log(a);
// }
// test();



// 3.let 不会变量提升 会产生一个暂时性死区
// ReferenceError: Cannot access 'a' before initialization
// function test(){
//     console.log(a);
//     let a = 10;
// }
// test();
// var obj = {foo:()=>console.log(this)}



// 4.let 只能在当前的作用域生效
// var a = 10;
// function test() {
//     let  a = 9;
//     {
//         var a = 8;
//     }
//     console.log(a);
// }
// test();
for (let i = 0; i < 10; i++) {
    let i = 'a';
    console.log(i);// 打印10次a
}
// 理解
// if (1){
//     let i = 0;
//     {
//         // var i = 'a'; 会报错 因为变量提升 会在全局先 var i = undefined 而let特性无法定义重复变量
//         let i = 'a';
//         console.log(i);
//     }
// }


// 变量重复
// 块级作用域
// var a = 1;
// {
//     var a = 2;
//     console.log(a);
// }

// 立即执行函数
// 不会影响 因为是独立的作用域
var a = 1;
(function (){
    // var a = 100;
    console.log(a);// 1
})();