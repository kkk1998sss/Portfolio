import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/diginity.png'
import IMG2 from '../../assets/firrki.png'
import IMG3 from '../../assets/Social.png'
import IMG4 from '../../assets/Om log.png'
import IMG5 from '../../assets/different.png'
import IMG6 from '../../assets/calculator.png'

// Dynamic data

const data = [
{
  id: 1,
  image: IMG1,
  title: 'Dignity Medical Taining',
  github: 'https://github.com/kkk1998sss',
  demo: 'https://www.dignitymedicaltraining.com/'
},
{
  id: 2,
  image: IMG2,
  title: 'Firrki',
  github: 'https://github.com/kkk1998sss',
  demo: 'https://firrki-three.vercel.app/'
},
{
  id: 3,
  image: IMG3,
  title: 'Social Media App',
  github: 'https://github.com/kkk1998sss',
  demo: 'https://social-media-app-theta-seven.vercel.app/'
},
{
  id: 4,
  image: IMG4,
  title: 'Om Logistics Ltd.',
  github: 'https://omapi.omlogistics.co.in/user',
  demo: 'https://omapi.omlogistics.co.in/user'
},
{
  id: 5,
  image: IMG5,
  title: 'OTP and Different Components',
  github: 'https://different-components-project.vercel.app/',
  demo: 'https://different-components-project.vercel.app/'
},
{
  id: 6,
  image: IMG6,
  title: 'Calculator',
  github: 'https://react-string-calculator.vercel.app/',
  demo: 'https://react-string-calculator.vercel.app/'
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