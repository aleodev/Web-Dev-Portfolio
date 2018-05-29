import React, {Component} from 'react'
import sr from '../pckgs/scrollReveal.js'
class About extends Component {
  render() {
    return (<section className="section-page" id="about-page">
      <div className="about-side item">
        <h1>About Me</h1>
        <hr/>
        <h2>I'm a front end developer based in the heart of <span>New York City</span>.</h2>
        <p>- I'm in love with the concept of thoughts being turned into a reality. Whether it'd be a website design, or a photo, turning these storms of thought into a functional form makes me smile like nothing else.
        </p>
        <img src="/assets/img/portrait.jpg.gz"/>
        <p>- I also enjoy cooking, excersizing, gaming, and even walks at the park!
        </p>
      </div>
      <div className="service-side item">
        <h1>Services</h1>
        <hr/>
      </div>
      <div className="skills-side item">
        <h1>Skills</h1>
        <hr/>
      </div>

    </section>)
  }
}

export default About
