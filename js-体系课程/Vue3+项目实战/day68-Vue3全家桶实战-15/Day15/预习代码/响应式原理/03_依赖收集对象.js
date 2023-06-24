class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend(fn) {
    this.reactiveFns.push(fn)
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const obj = {
  name: "why",
  age: 18
}

Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set: function(newValue) {
      value = newValue
      dep.notify()
    },
    get: function() {
      return value
    }
  })
})

// 监听函数
// const reactiveFns = []
const dep = new Depend()
function watchFn(fn) {
  dep.addDepend(fn)
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

obj.name = "kobe"
console.log('-----')
obj.age = 30
