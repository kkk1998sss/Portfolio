import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// Dynamic data

const data = [
{
  id: 1,
  image: IMG1,
  title: 'Brodsport - Sport Streaming Platform',
  github: 'https://github.com/',
  demo: 'https://dribbble.com/shots/20991747-Brodsport-Sport-Streaming-Platform'
},
{
  id: 2,
  image: IMG2,
  title: 'Subzero - Finance Landing Page',
  github: 'https://github.com/',
  demo: 'https://dribbble.com/shots/20989236-Subzero-Finance-Landing-Page'
},
{
  id: 3,
  image: IMG3,
  title: 'Brainwave - AI Art Generator',
  github: 'https://github.com/',
  demo: 'https://dribbble.com/shots/20987686-Brainwave-AI-Art-Generator '
},
{
  id: 4,
  image: IMG4,
  title: 'Logo design Letter F brand identity',
  github: 'https://github.com/',
  demo: 'https://dribbble.com/shots/20989001-Logo-design-Letter-F-brand-identity'
},
{
  id: 5,
  image: IMG5,
  title: 'Nitro - Design Agency Landing Page',
  github: 'https://github.com/',
  demo: 'https://dribbble.com/shots/20991482-Nitro-Design-Agency-Landing-Page'
},
{
  id: 6,
  image: IMG6,
  title: 'Wander Dashboard',
  github: 'https://github.com/',
  demo: 'https://dribbble.com/shots/20986158-Wander-Dashboard'
},
];

const Portifolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portifolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portifolio__item">
                <div className="portifolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portifolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>   
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portifolio