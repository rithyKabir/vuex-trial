<template>
  <div class="container mt-3">
    <div class="row">
        <div clas = "col">
            <p class="h3 text-success">Counter</p> 
            <p class="fst-italic"> Vuex helps us deal with shared state management with the cost of more concepts and boilerplate. The following counter is developed using VueX. The counter value is stored even after you browse to othe routes. This can't be achieved without store management.</p>
        </div>
    </div>    
  </div>
  <div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card shadow-lg">
                <div class="card-body">
                    <p class="h3 display-3">{{count}}</p>
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
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();

        return {
            count : computed(
                () => store.state.counterState.counter.count
            ),
            clickIncrement : () => store.dispatch('CounterModule/incrementCounter'),
            clickDecrement: () => store.dispatch('CounterModule/decrementCounter'),
            clickIncrementBy: (x) => store.dispatch('CounterModule/incrementCounterBy', {value : x }),
        }
    }
    
}
</script>
