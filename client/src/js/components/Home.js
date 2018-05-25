import React from 'react'

const Home = (props) => {
  return (<section className="section-page" id="home-page">
    <div className="home-container">
      <div className="name">Alex Ortiz</div>
      <div className="home-social">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/aleodev" id="github"><img id="socialmedia" src="/assets/img/social/github.png.gz"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Alexodev_" id="twitter"><img id="socialmedia" src="/assets/img/social/twitter.png.gz"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/" id="instagram"><img id="socialmedia" src="/assets/img/social/instagram.png.gz"/></a>
      </div>
      <div className="text">I’m a<span>
          frontend developer</span>,
        <span>photographer</span>, and a
        <span>passionate learner</span>
        that strives to maximize their capacity and capability of productive and functional code.</div>
      <a href='#about-page'>
        <span></span>Scroll</a>
    </div>
  </section>)
}

export default Home
