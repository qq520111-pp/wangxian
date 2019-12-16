import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        msg: [],
        ll: []
    },
    mutations: {
        getList(state, a) {
            state.msg = a
        },
        filList(state, a) {
            if (state.ll.some(item => {
                return item.i == a.id
            })) {
                state.ll.forEach(item => {
                    if (item.i == a.id) {
                        item.num = a.num
                    }
                })
            } else {
                var result = state.msg.filter((item, ind) => {
                    return a.id == item.i
                })
                result[0].num = a.num
                state.ll = state.ll.concat(result);
            }
        },
        deleList(state, a) {
            //是传进来的i
            var result = state.ll.filter(item => {
                return item.i !== a
            })
            state.ll = result;
        }
    }
})

export default store