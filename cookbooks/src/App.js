import React from 'react';
import Index from './views/index'
import Category from './views/category/Category'
import {BrowserRouter as Router,Switch, Route,Redirect} from 'react-router-dom'
import {MapProvider} from './context/MapContext'

function App() {
  return (
    <MapProvider>
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
      
      </MapProvider>
  );
}

export default App;
