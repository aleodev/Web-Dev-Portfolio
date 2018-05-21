import React, {Component} from 'react'
import Header from './containers/Header'
import Main from './containers/Main'
import $ from 'jquery'
import sr from './pckgs/scrollReveal.js'

class App extends Component {
  componentDidMount() {
    $("#site").delay(100).animate({
      opacity: 1
    }, 700)
    $(".logo").delay(500).animate({
      opacity: 1
    }, 700)
    $(".social").delay(500).animate({
      opacity: 1
    }, 700)
    sr.reveal('.name', {
      origin: 'top',
      duration: 1000,
      delay: 150,
      distance: '200px',
      scale: 1,
      easing: 'ease',
      opacity: 0
    })
    sr.reveal('.text', {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '200px',
      scale: 1,
      easing: 'ease',
      opacity: 0
    })
  }
  render() {
    return (<div id="site">
      <Header></Header>
      <div className="wrapper">
        <Main></Main>
      </div>
    </div>)
  }
}

export default App;
