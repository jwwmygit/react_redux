import React,{Component} from 'react';
import PropType from 'prop-types';
//UI组件/*
// count
// increment
// */
export default class Counter extends Component{
    static propTypes={
        count:PropType.number.isRequired,
        increment:PropType.func.isRequired,
        decrement:PropType.func.isRequired,
    }
    addClick=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
        //    更新数值
        this.props.increment(number);

    };
    decrementClick=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
        this.props.decrement(number);

    };
    createOdd=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
        const count=this.props.count;
        if(count%2===1){
            this.props.increment(number);

        }

    };
    addAsync=()=>{
        //乘1使其字符串转化成数值
        setTimeout(()=>{
            const number=this.refs.numberSelect.value*1;
            this.props.increment(number);
        },1000);


    };
    render(){
        const count=this.props.count;
        console.log(1111111111)
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