import React, {Component} from 'react'
import $ from 'jquery'

class Header extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop()
      if (scroll >= 100) {
        $('.header').addClass('blackheader')
      } else {
        $('.header').removeClass('blackheader')
      }
    })
    $(window).on('load resize scroll click', function() {
      var offsetTop = $('#about-page').offset().top
      var scroll = $(window).scrollTop()
      if ($(window).width() < 1024 || scroll > offsetTop - 1) {
        $('.header').addClass('smallheader')
      } else {
        $('.header').removeClass('smallheader')
      }
    })
    $('.mobile-a').on('click', function(){
      $( "#mobile" ).prop( "checked", false )
    })

  }

  render() {
    return (<header className="header">
      <div className="logo">
        <a href="#"><img id="logo" src="/assets/img/logo.png.gz"/></a>
      </div>
      <div className="menu">
        <a href="#home-page" id="home">Home</a>
        <a href="#about-page" id="about">About</a>
        <a href="#works-page" id="works">Works</a>
        <a href="#contact-page" id="contacts">Contact</a>
      </div>
      <div className="social">
        <input id="mobile" type="checkbox"/>

        <label htmlFor="mobile">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav>
          <ul>
            <li>
              <a class="mobile-a" href="#home-page">Home</a>
            </li>
            <li>
              <a class="mobile-a" href="#about-page">About</a>
            </li>
            <li>
              <a class="mobile-a" href="#works-page">Works</a>
            </li>
            <li>
              <a class="mobile-a" href="#contact-page">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>)
  }
}

export default Header
