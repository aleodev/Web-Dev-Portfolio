import React, {Component} from 'react'
import sr from '../pckgs/scrollReveal.js'
class About extends Component {
  componentDidMount() {
    sr.reveal('.about-me-side', this.aboutReveal('top'))
    sr.reveal('.service-side', this.aboutReveal('left'))
    sr.reveal('.skills-side', this.aboutReveal('right'))
    sr.reveal('.skill', {
      duration: 1500
    }, 300);
    sr.reveal('.service', {
      duration: 1500
    }, 300);
    sr.reveal('.port', {
      duration: 3000
    }, 300);
  }
  aboutReveal = (side) => {
    var config = {
      origin: side,
      duration: 1300,
      delay: 100,
      distance: '200px',
      scale: 1,
      easing: 'ease',
      opacity: 0
    }
    return config
  }
  createSkills = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 7; i++) {
      let skillinfo = []
      let skillLevel = [
        80,
        65,
        69,
        67,
        70,
        79,
        60
      ]
      let skillNames = [
        'HTML & CSS',
        'SASS',
        'Javascript',
        'React',
        'Node.js',
        'Webpack',
        'Gulp'
      ]
      let skillDescriptions = [
        'HTML ',
        'Base html page with css styling. ',
        'Base html page with css styling. ',
        'Base html page with css styling. ',
        'Base html page with css styling. ',
        'Base html page with css styling. ',
        'Base html page with css styling. '
      ]
      let bar = []
      //Inner loop to create children
      skillinfo.push(<div className="skill-item" key={i}>
        <div className="skill-img"><img alt={skillNames[i]} src={`/assets/img/skills/${i}.png.gz`}/></div>
        <div className="skill-info">
          <div className="skill-name">{skillNames[i]}</div>
          <br/>
          <div className="skill-description">{skillDescriptions[i]}</div>
        </div>
      </div>)

      //Uses for loop value to push bar values
      bar.push(<div className="bar" key={i}>
        <div className="bar-inside" style={{
            width: `${skillLevel[i]}%`
          }}></div>
      </div>)

      //Pushes skill info and the bar to table
      table.push(<div className="skill" key={i}>{skillinfo}{bar}</div>)
    }
    return table
  }

  render() {
    return (
      <section className="section-page" id="about-page">
      <div className="about-me-side item">
          <h1>About Me</h1>
          <hr/>
          <h2>I'm a front end developer based in the heart of
            <span> New York City</span>.</h2>
          <p>Hello, my name is Alex Ortiz. I'm in love with the concept of thoughts being turned into a reality. Whether it'd be a website design, or a photo, turning these storms of thought into a functional form makes me smile like nothing else.
          </p>
          <img className="port" src="/assets/img/portrait.jpg.gz" alt="Highschool Prom" />
          <p>- I also enjoy cooking, excersizing, gaming, and even walks at the park!
          </p>
      </div>
      <div className="service-side item">
          <h1>Services</h1>
          <hr/>
          <div className="service-grid">
              <div className="service">
                  <h1>
                <span>RESPONSIVE </span>
                CODE</h1>
                  <div className='login-icon'>
                      <i className="fa fa-expand" aria-hidden="true"></i>
                  </div>
                  <p>I bring compatibility across all devices, big or small, mobile or full desktop using the latest grid systems.</p>

              </div>
              <div className="service">
                  <h1>
                <span>FRONT-END </span>
                DEVELOPMENT</h1>
                  <div className='login-icon'>
                      <i className="fa fa-laptop" aria-hidden="true"></i>
                  </div>
                  <p>I build next-generation web products using best-in practice technologies &
frameworks.</p>
              </div>
              <div className="service">
                  <h1><span>UI/UX</span> DESIGN</h1>
                  <div className='login-icon'>
                      <i className="fa fa-magic" aria-hidden="true"></i>
                  </div>
                  <p>I love shaping your product from research to interaction to pixels, thus defining how easy a product is to use.</p>
              </div>
          </div>
      </div>
      <div className="skills-side item">
          <h1>Skills</h1>
          <hr/>
          {this.createSkills()}
          <div className='skill'><p>Other skills include...  <img src="/assets/img/skills/7.png.gz"/> <img src="/assets/img/skills/8.png.gz"/> <img src="/assets/img/skills/9.png.gz"/></p></div>
      </div>
  </section>
  )
  }
}

export default About
