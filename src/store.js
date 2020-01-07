import Vue from 'vue'
import Vuex from 'vuex'
import {fbDB} from './Scripts/firebase'
import {INSERT_TODO} from './mutation-types'

Vue.use(Vuex)
export default new Vuex.Store({ 
    state:{
        todo:[],   
    },
    getters:{
        allToDo(state){
            fbDB.ref('memo').on('value', snapshot => {
                if (snapshot) {
                    const rootList = snapshot.val();
                    state.todo.length = 0
                    Object.keys(rootList).forEach((val, key) => { // eslint-disable-line
                      state.todo.push(rootList[val]);
                    })
                  }
                })
                return state.todo
            }
        },
    mutations:{
        [INSERT_TODO](state,payload){
            state.todo.push(payload)
        }
    },
    actions:{
        [INSERT_TODO]({},data){ // eslint-disable-line
            fbDB.ref('memo').push(data)
               
        }
    }
})