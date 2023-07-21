import { defineStore } from "pinia";

export const useCounterStore = defineStore('counterStore', {
    state: () => ({
        count : 0
    }),
    getters: {
        getCount(){
            return this.count;
        },
        // this keyword doesn't reflect state value in arrow functions
        totalCount : (state) => {
            return state.count;
        }
    },
    actions: {
        INCR_COUNTER(){
            this.count = this.count + 1;
        },
        DECR_COUNTER(){
            this.count = this.count - 1;
        },
        INCR_COUNTER_BY(value){
            this.count = this.count + value;
        }
    }
})