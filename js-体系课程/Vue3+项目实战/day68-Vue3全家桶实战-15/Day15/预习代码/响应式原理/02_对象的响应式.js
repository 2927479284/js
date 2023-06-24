const obj = {
  name: "why",
  age: 18
}

foo()
bar()

function foo() {
  console.log("my name is", obj.name)
  console.log("my age is", obj.age)
}

function bar() {
  console.log("my name is", obj.name)
  console.log("my age is", obj.age)
}

obj.name = "kobe"
foo()
bar()

// 监听函数
const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}

watchFn(function() {
  console.log("foo:", obj.name)
  console.log("foo:", obj.age)
})

watchFn(function() {
  console.log("bar:", obj.name)
  console.log("bar:", obj.age)
})



