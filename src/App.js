import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store  from './reducers/index';
import Home from './components/home';
import Main from './components/main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Confirmation from './components/confirmation';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="appDiv">
            <Route exact path="/" component = {Home} />
            <Route path = "/questions" component = {Main} />
            <Route path = "/confirm" component = {Confirmation} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
