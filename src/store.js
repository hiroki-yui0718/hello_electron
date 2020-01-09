import Vue from 'vue'
import Vuex from 'vuex'
import {fbDB} from './Scripts/firebase'
import {INSERT_TODO,INSERT_MEMO,UPDATE_MEMO} from './mutation-types'
import {db} from './Scripts/indexedDB'

Vue.use(Vuex)
export default new Vuex.Store({ 
    state:{
        todo:[], 
        memo:[],  
    },
    getters:{
        allToDo(state){
            fbDB.ref('todo').on('value', snapshot => {
                if (snapshot) {
                    const rootList = snapshot.val();
                    state.todo.length = 0
                    Object.keys(rootList).forEach((val, key) => { // eslint-disable-line
                      state.todo.push(rootList[val]);
                    })
                  }
                })
                return state.todo
            },
        allMemo(state){
                fbDB.ref('memo').on('value', snapshot => {
                    if (snapshot) {
                        const rootList = snapshot.val();
                        state.memo.length = 0
                        Object.keys(rootList).forEach((val, key) => { // eslint-disable-line
                          state.memo.push(rootList[val]);
                        })
                      }
                    })
                    return state.memo
                
                },
                countMemo(state){
                    fbDB.ref('memo').on('value', snapshot => {
                        if (snapshot) {
                            const rootList = snapshot.val();
                            state.memo.length = 0
                            Object.keys(rootList).forEach((val, key) => { // eslint-disable-line
                              state.memo.push(rootList[val]);
                            })
                          }
                        })
                        return state.memo.length
                    
                    },
                },
                
    mutations:{
        [INSERT_TODO](state,payload){
            state.todo.push(payload)
        }
    },
    actions:{
        [INSERT_TODO]({},data){ // eslint-disable-line
            fbDB.ref('todo').push(data)
            db.insert(data)
               
        },
        [INSERT_MEMO]({},data){ // eslint-disable-line
            fbDB.ref('memo').push(data)
            db.insert(data)
               
        },
        [UPDATE_MEMO]({},data){ // eslint-disable-line
            fbDB.ref('memo').upadte(data)
               
        },

    }
})