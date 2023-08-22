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
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
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
        </article>
        {/* END OF Web Development */}
        <article className="service">
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
        </article>
        {/* End Of Content Creation */}
      </div>
    </section>
  )
}

export default Services