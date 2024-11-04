import React from 'react'
import './services.css'
import {BsCheckAll} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list' >
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p> User-Centered Design: Focus on user needs for intuitive navigation and usability. </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Consistency: Maintain consistent visual elements for a cohesive, seamless user experience.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Responsive Layout: Ensure adaptability across devices for optimal accessibility and readability.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Clear Visual Hierarchy: Guide user attention with prioritized content and layout structure.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Feedback Mechanisms: Use visual cues to inform users about their actions' outcomes.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Accessibility Compliance: Design with inclusivity in mind for users with diverse needs.</p>
            </li>
            {/* <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Has  vast knowledge on Ui and styling deigns </p>
            </li> */}
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Responsive Design: Create websites that adapt smoothly across all device screens.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>SEO Optimization: Implement techniques to improve website visibility on search engines.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Cross-Browser Compatibility: Ensure functionality and appearance consistency across all major browsers.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Efficient Load Times: Optimize code and assets for faster page loading speeds.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Security Practices: Protect user data and prevent vulnerabilities with secure coding.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>User-Friendly Navigation: Design intuitive layouts for easy access to website content.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF Web Development */}
        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Has  vast knowledge on Ui and styling deigns </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Has  vast knowledge on Ui and styling deigns </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Has  vast knowledge on Ui and styling deigns </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Has  vast knowledge on Ui and styling deigns </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Has  vast knowledge on Ui and styling deigns </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Has  vast knowledge on Ui and styling deigns </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Has  vast knowledge on Ui and styling deigns </p>
            </li>
          </ul>
        </article> */}
        {/* End Of Content Creation */}
      </div>
    </section>
  )
}

export default Services