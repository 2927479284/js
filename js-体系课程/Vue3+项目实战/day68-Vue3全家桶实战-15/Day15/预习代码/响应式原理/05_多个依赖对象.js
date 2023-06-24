class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }
  addDepend(fn) {
    this.reactiveFns.add(fn)
  }
  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn)
    }
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const targetMap = new WeakMap()
function getDepends(target, key) {
  let objMap = targetMap.get(target)
  if (!objMap) {
    objMap = new Map()
    targetMap.set(target, objMap)
  }

  let depend = objMap.get(key)
  if (!depend) {
    depend = new Depend()
    objMap.set(key, depend)
  }

  return depend
}

function reactive(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      set: function(newValue) {
        value = newValue
        const dep = getDepends(obj, key)
        dep.notify()
      },
      get: function() {
        const dep = getDepends(obj, key)
        dep.depend()
        return value
      }
    })
  })
  return obj
}

const obj = reactive({
  name: "why",
  age: 18
})

const user = reactive({
  nickname: "coderwhy",
  level: 100
})

// 监听函数
// const reactiveFns = []
const dep = new Depend()
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

watchFn(function() {
  console.log("foo:", obj.name)
  console.log("foo:", obj.age)

  console.log(user.nickname)
})

watchFn(function() {
  console.log("bar:", obj.name)
  console.log("bar:", obj.age)
})

// console.log("修改name-----------")
// obj.name = "kobe"
// console.log('修改age-----')
// obj.age = 30

// 修改user的nickname
console.log("修改user-------")
user.nickname = "james"
