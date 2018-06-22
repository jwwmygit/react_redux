import React,{Component} from 'react';
export default class App extends Component{
    state={
        count:1
    }
    addClick=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
        const count=this.state.count+number;
    //    更新数值
        this.setState({
            count
        })
    };
    decrementClick=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
        const count=this.state.count-number;
        //    更新数值
        this.setState({
            count
        })
    };
    createOdd=()=>{
        //乘1使其字符串转化成数值
        const number=this.refs.numberSelect.value*1;
        if(this.state.count%2===1){
            const count=this.state.count+number;
            //    更新数值
            this.setState({
                count
            })
        }

    };
    addAsync=()=>{
        //乘1使其字符串转化成数值
       setTimeout(()=>{
           const number=this.refs.numberSelect.value*1;
           const count=this.state.count+number;
           this.setState({
               count
           })
       },1000);


    };
    render(){
        const {count}=this.state;
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