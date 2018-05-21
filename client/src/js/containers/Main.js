import React, {Component} from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Works from '../components/Works'
import $ from 'jquery'

class Main extends Component {
  componentDidMount() {
    var $root = $('html, body');

    $('a[href^="#"]').click(function() {
      var href = $.attr(this, 'href');

      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function() {
        window.location.hash = href;
      });

      return false;
    });
  }
  render() {
    return (<div className="main">
      <Home/>
      <About/>
      <Works/>
      <Contact/>

    </div>)
  }
}

export default Main
