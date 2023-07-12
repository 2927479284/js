import {createStore} from "vuex";


let store = createStore({
    state: ()=>{
        return {
            counter: 100
        }
    }
})


export default store;