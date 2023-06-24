<script>
  import { h, ref } from 'vue'
  import HelloWorld from "./components/HelloWorld.vue"

  export default {
    data() {
      return {
        counter: 100
      }
    },
    render() {
      return h("div", { class: "counter" }, [
        h("h2", { class: "title" }, `当前计数: ${this.counter}`),
        h("button", { onclick: this.increment}, `+1` ),
        h("button", { onclick: this.decrement}, `-1` ),
        h(HelloWorld, { msg: "哈哈哈" })
      ])
    },
    methods: {
      increment() {
        this.counter++
      },
      decrement() {
        this.counter--
      }
    },
    setup() {
      const counter = ref(200)

      const increment = () => {
        counter.value++
      }
      const decrement = () => {
        counter.value--
      }

      return () => h("div", { class: "counter" }, [
        h("h2", { class: "title" }, `当前计数: ${counter.value}`),
        h("button", { onclick: increment}, `+1` ),
        h("button", { onclick: decrement}, `-1` ),
        h(HelloWorld, { msg: "哈哈哈" })
      ])
    }
  }
</script>

<style scoped>

</style>