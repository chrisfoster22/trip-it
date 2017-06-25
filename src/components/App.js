import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AllPosts from './AllPosts';
import '../stylesheets/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <BrowserRouter>
            <Route exact path="/" component={AllPosts} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
