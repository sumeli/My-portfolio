import React, { useEffect } from 'react'
import './contact.css'
import { IoCall, IoLogoWhatsapp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import AOS from 'aos';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <div>
      <div class="contact-container">
        <div class="form" data-aos={"zoom-out"}>
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              In order to contact me, these are some of my social media ids
              and my phone number and WhatsApp number. I am always available on these
              platforms. You can also send me a message using the alternative.
            </p>

            <div class="info">
              <div class="information">
                <IoCall />
                <p>9832136974</p>
              </div>
              <div class="information">
                <IoLogoWhatsapp />
                <p>8768642962</p>
              </div>
              <div class="information">
                <MdEmail />
                <p>sumeli.debdas22@gmail.com</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect With Me :</p>
              <div class="social-icons">
                <a href='https://www.facebook.com/sarita.sengupta.10' target="_blank">
                  <AiFillFacebook />
                </a>
                <a href="https://twitter.com/SumeliDebdas" target="_blank">
                  <FaTwitter />
                </a>
                <a href='https://www.instagram.com/sumeli_debdas/' target="_blank">
                  <AiFillInstagram />
                </a>
                <a href='https://www.linkedin.com/in/sumeli-debdas-b69b0b220/' target="_blank">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">

            <form action="https://formsubmit.co/sumeli.debdas22@gmail.com" method="POST">
              <h3 class="title">Contact Me</h3>
              <div class="input-container">
                <input type="text" name="name" class="input" placeholder='Name' />
                {/* <label for="">Username</label> */}
                <span>Username</span>
              </div>
              <div class="input-container">
                <input type="email" name="email" class="input" placeholder='Email' />
                {/* <label for="">Email</label> */}
                <span>Email</span>
              </div>
              <div class="input-container">
                <input type="tel" name="phone" class="input" placeholder='Phone Number' />
                {/* <label for="">Phone</label> */}
                <span>Phone</span>
              </div>
              <div class="input-container textarea">
                <textarea name="message" class="input" placeholder='Message'></textarea>
                {/* <label for="">Message</label> */}
                <span>Message</span>
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact