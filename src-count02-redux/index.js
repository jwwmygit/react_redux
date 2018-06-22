import React,{Component} from 'react';
import ReactDom from 'react-dom';
import App from './components/app'
import {createStore} from 'redux';
import {count} from  './redex/reducers';
//创建一个store对象

const store=createStore(count);
console.log(store);

render();
function render() {
    ReactDom.render(
        <App store={store}/>,
        document.getElementById('root'))
}

//订阅监听
store.subscribe(render);