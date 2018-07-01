import React, {Component} from 'react'
import sr from '../pckgs/scrollReveal.js'
class Home extends Component {
  componentDidMount () {
    sr.reveal('.portrait', {
      origin: 'top',
      duration: 1250,
      delay: 250,
      distance: '200px',
      scale: 1,
      easing: 'ease',
      opacity: 0
    })
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
  render () {
    return (<section className="section-page" id="home-page">
      <div className="home-container">
        <div className="portrait"><img src="/assets/img/portrait.jpg.gz" alt="Highschool Prom"/></div>
        <div className="name">Alex Ortiz</div>
        <div className="text">I’m a <span>frontend developer</span>, <span>photographer</span>, and a <span>passionate learner</span> that strives to maximize their capacity and capability of productive and functional code.</div>
        <div className="pageSwitcher">
          <a href='#about-page'><div className="switcher-particle"><span></span></div></a>
        </div>
      </div>
    </section>)
  }
}

export default Home
