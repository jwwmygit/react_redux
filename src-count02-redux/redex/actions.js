import {INCREMENT,DECREMENT} from './action-types';
//定义actioncreator函数的对象
//增加的action
export const increment=(number)=>({type:INCREMENT,number});
//减少的action
export const decrement=(number)=>({type:DECREMENT,number});