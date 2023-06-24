

<script lang="jsx">
import { ref } from 'vue'

  export default {
    data() {
      return {
        counter: 100
      }
    },
    render() {
      return (
        <div>
          <h2>当前计数: { this.counter }</h2>
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>
        </div>
      )
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
      const counter = ref(0)

      const increment = () => {
        counter.value++
      }
      const decrement = () => {
        counter.value--
      }

      return () => (
        <div>
          <h2>当前计数: { counter.value }</h2>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
        </div>
      )
    }
  }
</script>

<style scoped>

</style>