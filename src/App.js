import React, {Component} from 'react';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import {Provider} from './context'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
  return (
    <Provider>
      <BrowserRouter>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Index} />  
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
