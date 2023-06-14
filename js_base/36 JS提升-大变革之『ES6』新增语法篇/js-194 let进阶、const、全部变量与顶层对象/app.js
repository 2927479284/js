// var arr = [];
//
// for (let i = 0; i <10; i++) {
//     arr[i] = function (){
//         console.log(i);
//     }
// }
// for (var k = 0; k < 10; k++) {
//     arr[k]();
// }


/*
{
    let arr = [()=>{
        console.log(0)}],
        number = 1;
    {
        arr[1] = function (){
            console.log(number);
        }
    }
    console.log(arr);
}*/


// 常量：const
// 1.一但定义必须赋值 值不能被修改
// TypeError: Assignment to constant variable.
// const a = 10;
// a = 11;
// console.log(a);

// 2.有块级作用域
// 暂时性死区问题 无法提升
// ReferenceError: Cannot access 'a' before initialization
// {
//     console.log(a);
//     const a = 10;
// }
// console.log(a);


// 3.常量与let一样 无法重复定义
// SyntaxError: Identifier 'a' has already been declared
// {
//     const a = 10;
//     let  a = 11;
//     var a = 12;
// }


// 原始类型数据 无法修改
// 引用类型保存
// const obj = {};
// obj.name = 'zs';
// console.log(obj);


// 变量冻结
const obj = {
    son:{
        a:'a'
    },
    arr:[0]
};
function myFreeze(obj){
    Object.freeze(obj);
    for (let key in obj){
        if (typeof (obj[key] === 'object') && obj[key] != null){
            Object.freeze(obj[key]);
        }
    }
}
myFreeze(obj);
obj.son.b = 'b';// 无法添加新属性，会静默失败，不会报错
obj.arr.push(1);// TypeError: Cannot add property 1, object is not extensible
//尝试给 obj.son 添加新属性 b 时，由于 obj.son 已经被冻结，
// 静默失败且不会报错。而尝试向 obj.arr 添加新元素时，
// 由于 obj.arr 是一个数组且被冻结，所以会抛出 TypeError 错误，提示对象不可扩展。
console.log(obj);