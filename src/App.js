import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainContentBlock from './components/MainContentBlock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainContentBlock/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
