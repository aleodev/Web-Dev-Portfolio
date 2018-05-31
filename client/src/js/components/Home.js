import React, {Component} from 'react'
import sr from '../pckgs/scrollReveal.js'
class Home extends Component {
  componentDidMount(){
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
        <div className="name">Alex Ortiz</div>
        <div className="text">I’m a<span>frontend developer</span>, <span>photographer</span>, and a<span> passionate learner</span> that strives to maximize their capacity and capability of productive and functional code.</div>
        <a href='#about-page'>
          <span></span>Scroll</a>
      </div>
    </section>)
  }
}

export default Home
