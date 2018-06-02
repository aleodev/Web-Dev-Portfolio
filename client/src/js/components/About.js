import React, {Component} from 'react'
import sr from '../pckgs/scrollReveal.js'
class About extends Component {
  componentDidMount() {
    sr.reveal('.about-me-side', this.aboutReveal('top'))
    sr.reveal('.service-side', this.aboutReveal('left'))
    sr.reveal('.skills-side', this.aboutReveal('right'))
    sr.reveal('.skill', { duration: 2000 }, 300);
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
       let skillLevel = [80, 65, 69, 67, 70, 79, 60]
       let skillNames = ['HTML & CSS', 'SASS', 'Javascript', 'React', 'Node.js', 'Webpack', 'Gulp']
       let skillDescriptions = ['HTML ','Base html page with css styling. ', 'Base html page with css styling. ', 'Base html page with css styling. ', 'Base html page with css styling. ', 'Base html page with css styling. ', 'Base html page with css styling. ']
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
           <div className="bar-inside" style={{width: `${skillLevel[i]}%`}}></div>
         </div>)

       //Pushes skill info and the bar to table
       table.push(<div className="skill" key={i}>{skillinfo}{bar}</div>)
     }
     return table
   }

  render() {
    return (<section className="section-page" id="about-page">
      <div className="about-me-side item">
        <h1>About Me</h1>
        <hr/>
        <h2>I'm a front end developer based in the heart of <span>New York City</span>.</h2>
        <p>- I'm in love with the concept of thoughts being turned into a reality. Whether it'd be a website design, or a photo, turning these storms of thought into a functional form makes me smile like nothing else.
        </p>
        <img src="/assets/img/portrait.jpg.gz" alt="Highschool Prom"/>
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
         {this.createSkills()}
      </div>

    </section>)
  }
}

export default About
