import { createApp } from 'vue'
import App from './Vue/App.vue'

import { sum } from './utils/math'
import "./utils/component"

const name = "why"
console.log(name)

console.log("Hello World")

function foo() {
  console.log("foo function execution")
}

const bar = (arg) => {
  console.log(arg.length)
}

foo()
bar(name)
bar("Hello World")

console.log(sum(20, 30))
console.log(sum(100, 300))

// Vue渲染
createApp(App).mount("#app")
