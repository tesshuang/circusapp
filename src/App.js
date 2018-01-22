import React, { Component } from 'react';
import './App.css';
import Landing from './comp/Landing';

class App extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        return (
          <div className="App">
            <Landing />

          </div>
        );
    }
}

export default App;
