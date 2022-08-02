import React, { useEffect } from 'react'
import './home.css'
import AOS from 'aos';

import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    AOS.init({
        duration: 800
    });
  }, []);

  return (
    <div>
      <section className='home section'>
        <div className='home-section'>
          <div className='home-container container'>
            <div className='home-row row' >
              <div className='home-info padd-15' data-aos={"zoom-in"}>
                <h3 className='hello'>Hey There! I am <span className='name'>Sumeli Debdas</span> </h3>
                <h3 className='my-profession'>I am a <span className='typing'> <Typed
                  strings={[
                    'Web Developer.',
                    'Programmer.',
                    'Frontend Web Developer.',
                    'Student.',
                  ]}
                  typeSpeed={60}
                  backSpeed={60}
                  loop
                /></span></h3>
                <p>
                  I am a Web Developer from Kolkata, India. Aspiring to be a Full Stack Web Developer. 
                  My expertise is to create new websites from scratch and design them.
                </p>
                <Link to="/about">
                  <button className='btn hire-me'>More About Me</button>
                </Link>
              </div>
              <div className='home-img padd-15' data-aos={"zoom-in"}>
                <img src={require('../Assets/Profile.jpeg')} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home