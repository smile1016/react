import React from 'react';
import Index from './views/index'
import Category from './views/category/Category'
import {BrowserRouter as Router,Switch, Route,Redirect} from 'react-router-dom'
import store from './store/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Route path='/index' component={Index}></Route>
        <Route path='/category' component={Category}></Route>
        <Redirect from='/' to='/index'></Redirect>
        <Route path="*" render={()=>{
          return <h1>404page       </h1>
        }}></Route>
        </Switch>
        
      </Router>
      
    </Provider>
  );
}

export default App;
