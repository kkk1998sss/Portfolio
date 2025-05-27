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
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Modern UI/UX with React.js and Next.js for scalable applications</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Responsive layouts using Tailwind CSS and styled-components</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>State management with Redux Toolkit and React Context API</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Performance optimization and code splitting techniques</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Integration of REST APIs and GraphQL endpoints</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Automated testing with Jest and React Testing Library</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>AWS Lambda functions for serverless architecture</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>S3 bucket management for static and media file storage</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>API Gateway integration with Lambda functions</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>DynamoDB and RDS database implementation</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>CloudWatch monitoring and logging solutions</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>IAM roles and security best practices</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services