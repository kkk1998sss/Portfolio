import React from 'react'
import './experience.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>
        My Experience
      </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>TypeScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
              <h4>HTML/CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          
          
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>BootStrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>


            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>NextJS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>Angular</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>Angular Material</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>SQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          

            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsCheck2Circle className="experience__details-icon"/>
            <div>
            <h4>Express.JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience