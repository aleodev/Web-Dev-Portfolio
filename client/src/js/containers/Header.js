import React, {Component} from 'react'
import $ from 'jquery'

class Header extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      var offsetTop = $("#about-page").offset().top;
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $(".header").addClass("blackheader");
      } else {
        $(".header").removeClass("blackheader");
      }
    });
    $(window).on("load resize scroll", function() {
      if ($(window).width() < 1024) {
        console.log('add small header')
        $(".header").addClass("smallheader");
      } else {
        console.log('remove small header')
        $(".header").removeClass("smallheader");
      }
    });

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
        <a target="_blank" href="https://github.com/aleodev" id="github"><img id="social" src="/assets/img/social/github.png.gz"/></a>
        <a target="_blank" href="https://twitter.com/Alexodev_" id="twitter"><img id="social" src="/assets/img/social/twitter.png.gz"/></a>
        <a target="_blank" href="https://instagram.com/" id="instagram"><img id="social" src="/assets/img/social/instagram.png.gz"/></a>
      </div>
    </header>)
  }
}

export default Header
