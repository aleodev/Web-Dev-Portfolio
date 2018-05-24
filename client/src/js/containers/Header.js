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
      if ($(window).width() < 1024) {
        $('.social').css('opacity', 1)
      } else {
        $('.social').css('opacity', 0)
      }

    })
    $('.mobile-a').on('click', function() {
      $("#mobile").prop("checked", false)
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
              <a className="mobile-a" href="#home-page">Home</a>
            </li>
            <li>
              <a className="mobile-a" href="#about-page">About</a>
            </li>
            <li>
              <a className="mobile-a" href="#works-page">Works</a>
            </li>
            <li>
              <a className="mobile-a" href="#contact-page">Contact</a>
            </li>
          </ul>
        </nav>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/aleodev" id="github"><img id="social" src="/assets/img/social/github.png.gz"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Alexodev_" id="twitter"><img id="social" src="/assets/img/social/twitter.png.gz"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/" id="instagram"><img id="social" src="/assets/img/social/instagram.png.gz"/></a>
      </div>
    </header>)
  }
}

export default Header
