import Vue from 'vue'
import Vuex from 'vuex'
import {db} from './Scripts/indexedDB'
import {INSERT_TODO} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({ 
    state:{
        todo:[],   
    },
    getters:{
        allToDo(state){
            state.todo.length = 0
            db.loadDatabase()
            db.find({}, (error, docs) => {
            // 全ドキュメントが返る
            state.todo = docs
            return state.todo
            })
        }
    },
    mutations:{
        [INSERT_TODO](state,payload){
            state.todo.push(payload)
        }
    },
    actions:{
        [INSERT_TODO]({},data){
            db.insert(data)
        }
    }
})