import {defineStore} from "pinia";

let useCounter = defineStore("counter",{
    state: ()=>{
        return{
            name: "张三",
            age: 188
        }
    }
})

export default useCounter;