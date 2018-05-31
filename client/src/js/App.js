import React, {Component} from 'react'
import Header from './containers/Header'
import Main from './containers/Main'
import $ from 'jquery'

class App extends Component {
  componentDidMount () {
    $('#site').delay(100).animate({
      opacity: 1
    }, 700)
    $('.header').delay(200).animate({
      opacity: 1
    }, 700)


  }
  render () {
    return (<div id="site">
      <Header></Header>
      <div className="wrapper">
        <Main></Main>
      </div>
    </div>)
  }
}

export default App
