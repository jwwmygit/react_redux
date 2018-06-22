import React,{Component} from 'react';
import PropType from 'prop-types';
import *as actions from '../redex/actions'
export default class App extends Component{
 static propTypes={
    store:PropType.object.isRequired
 }

    addClick=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
    //    更新数值
    //     console.log(this.props.store.dispatch(actions.increment(number)))
        this.props.store.dispatch(actions.increment(number))
        console.log('++++=');

    };
    decrementClick=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
      this.props.store.dispatch(actions.decrement(number));
        console.log(this.props.store.dispatch(actions.decrement(number)));
    };
    createOdd=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
        const count=this.props.store.getState();
        if(count%2===1){
            this.props.store.dispatch(actions.increment(number))

        }

    };
    addAsync=()=>{
        //乘1使其字符串转化成数值
       setTimeout(()=>{
           const number=this.refs.numberSelect.value*1;
           this.props.store.dispatch(actions.decrement(number))
       },1000);


    };
    render(){
        const count=this.props.store.getState();
        return (
            <div>
                <h3>click {count} times</h3>
                <select ref="numberSelect">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                 <button   onClick={this.addClick}>+</button>
                 <button   onClick={this.decrementClick}>-</button>
                 <button   onClick={this.createOdd}>increment id odd</button>
                 <button   onClick={this.addAsync}>increment async</button>
            </div>
        )
    }
}