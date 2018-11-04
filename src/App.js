import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import DataFetch from './components/DataFetch'
import MainContentBlock from './components/MainContentBlock'


class App extends Component {
  render() {
    return (
      <div className="App background">
        <Header/>
        <MainContentBlock/>
          {/*<DataFetch/>*/}
          {console.log('this is key', process.env.REACT_APP_API_KEY)}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
