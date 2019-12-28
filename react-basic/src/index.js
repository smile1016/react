import React from 'react';
import ReactDOM from 'react-dom';

// import App from './basic/01-start/todolist/Todolist'
// import App from './basic/03-jsx/CreateElement'
// import App from './basic/04-style/Movie'
// import App from './basic/02-component/Movie'
// import App from './basic/03-jsx/Jsx'
// import App from './basic/02-component/Article'
// import App from './basic/04-style/Search'
// import App from './basic/05-props/Content'
// import App from './basic/05-props/Props'
// import App from './basic/06-state/Movie'
// import App from './basic/07-demo/Counter'
// import App from './basic/07-demo/02/MyProduct'
// import App from './basic/07-demo/04/Movie'

// import App from './basic/08-event/Event'
// import App from './basic/08-event/MyEvent'
// import App from './basic/09-switch-render/List'
// import App from './basic/10-form/Product'
// import App from './basic/11-lifecycle/Clock'
// import App from './basic/11-lifecycle/Parent'
// import App from './basic/12-context/my/Parent'
// import App from './basic/12-context/02/Counter'
// import App from './basic/13-hoc/Home'
// import App from './basic/Homework/List'

// import App from './adv/decorator/Decorator'
// import App from './adv/01-router/index'
// import App from './adv/05/index'
import App from './adv/redux/mytodolist/Todolist'
// import {Provider} from 'react-redux'
// import store from '../src/adv/redux/mytodolist/redux/store'
// import store from '../src/adv/redux/05-redux-saga/redux/store'
// import App from './adv/redux/05-redux-saga/Count'
// const App=(props)=>{
// return (<h1>helpp-{props.name}</h1>)
// }

// function App(){
//     return <h1>helpp</h1>
// }
// var h1 = <h1>xixi</h1>
ReactDOM.render(
    // <Provider store={store}>
        <App></App>
    // </Provider>
,
 document.getElementById('root'));
// ReactDOM.render(h1, document.getElementById('root'));

