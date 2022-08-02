import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
const SkillInfo = () => {
    return (
        <div>
            <div className='skill-icons'>
                <div className='icons'>
                    <a href='https://github.com/sumeli' target="_blank"><p><AiFillGithub /></p></a>
                </div>
                <div className='icons'>
                    <a href='https://www.instagram.com/sumeli_debdas/' target="_blank"><p><AiFillInstagram /></p></a>
                </div>
                <div className='icons'>
                    <a href='https://www.facebook.com/sarita.sengupta.10' target="_blank"><p><AiFillFacebook /></p></a>
                </div>
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/sumeli-debdas-b69b0b220/' target="_blank"><p><AiFillLinkedin /></p></a>
                </div>
            </div>
        </div>
    )
}

export default SkillInfo