/*
* 包含n个reduser函数对象
* reducer函数：根据老的state状态和指定的action对象，返回一个新的state
* action通过despatch传进来的
* */
import {INCREMENT,DECREMENT} from './action-types'
export function count(state=1,action) {
    console.log(state,action);
    switch (action.type){
        case INCREMENT:
            return state+action.number;
        case DECREMENT:
            return state-action.number;
        default:
            return state;
    }

}