<template>
  <div class="container mt-3">
    <div class="row">
        <div clas = "col">
            <p class="h3 text-success">Counter</p> 
            <p class="fst-italic"> The following counter is developed using Store Management. The counter value is stored even after you browse to othe routes. This can't be achieved without store management.</p>
        </div>
    </div>    
  </div>
  <div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card shadow-lg">
                <div class="card-body">
                    <p class="h3 display-3">{{counterStore.count}}</p>
                     <button class="btn btn-success m-1" @click="clickIncrement()">Increment</button>
            <button class="btn btn-warning m-1" @click="clickDecrement()">Decrement</button>
            <button class="btn btn-danger m-1" @click="clickIncrementBy(5)">Increment By</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {useCounterStore} from '../../pinia store/CounterStore'
export default {
    setup(){
       const counterStore = useCounterStore();

       const clickIncrement = () => {
         counterStore.INCR_COUNTER();
       }

       const clickDecrement = () => {
        counterStore.DECR_COUNTER();
       }

       const clickIncrementBy = (x) => {
        counterStore.INCR_COUNTER_BY(x)
       }
       return {counterStore, clickIncrement, clickDecrement, clickIncrementBy }
    }
    
}
</script>
