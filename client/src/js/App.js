import React, { Component } from 'react'
import Header from './components/Header'
import Home from './containers/Home'

class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <Header></Header>
        <Home></Home>
      </div>
    )
  }
}

export default App;
