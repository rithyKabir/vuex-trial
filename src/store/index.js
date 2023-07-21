import { createStore } from 'vuex'
import CounterModule from './modules/Counter.module'
import EmployeeModule from './modules/Employee.module';

export default createStore({
  state: {
    counterState: CounterModule.state,
    employeeState : EmployeeModule.state
  },
  modules: {
    CounterModule,
    EmployeeModule
  },
  getters: {
    getCounterState: function(state){
      return state.counterState.counter;
    },
    getEmployeeState: function(state){
      return state.employeeState.employeeList;
    }
  },
  mutations: {
  },
  actions: {
  }
})
