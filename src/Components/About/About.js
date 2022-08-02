import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import PersonalInfo from './PersonalInfo'
import SkillInfo from './SkillInfo'
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { TimelineData } from './TimelineData'
import { experienceData } from './Experience'
import Resume from '../Assets/Sumeli.pdf'
import AOS from 'aos';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);

    const data = TimelineData;
    const experience = experienceData;

    return (
        <div className='about-section'>
            <section className='about section'>
                <div className='about-section'>
                    <section className='container'>
                        <div className='row'>
                            <div className='section-title padd-15'>
                                <h2>About Me</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='about-content padd-15'>
                                <div className='row' data-aos={"fade-up"}>
                                    <div className='about-text padd-15'>
                                        <h3>I'm Sumeli Debdas, A <span>Web Developer</span></h3>
                                        <p>
                                            I am a Web Developer from Kolkata, India. Aspiring to be a Full Stack Web Developer.
                                            My expertise is to create new websites from scratch and design them and to make them fully resposnsive. I have worked in many
                                            projects using HTML, CSS, JS, React JS, for creating the frontend part and Node JS, Mongodb and
                                            Express JS, for the backend part. I am proficient in languages like C++, Javascript and C.
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='personal-info padd-15' data-aos={"fade-up"}>
                                        <PersonalInfo />
                                        <div className='btn-row row'>
                                            <div className='buttons padd-15'>
                                                <button className='btn'><a href={Resume} target='_blank' style={{ color: "var(--white)" }} download >Download Resume</a></button>
                                                <Link to="/contact">
                                                    <button className='btn hire-me'>Hire Me</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='skills padd-15' data-aos={"fade-up"}>
                                        <h2>FIND ME ON</h2>
                                        <SkillInfo />
                                    </div>

                                </div>


                                <div className='row'>
                                    <div className='education padd-15' data-aos={"fade-up"}>
                                        <h3 className='title'>Education</h3>
                                        <div className='row'>
                                            <div className='timeline-box padd-15'>
                                                <div className='timeline'>
                                                    {data.map((timeline) => {
                                                        return (
                                                            <div>
                                                                <div className='timeline-items'>
                                                                    <div className='circle-dot'></div>
                                                                    <h3 className='timeline-date'>
                                                                        <BsFillCalendarDayFill />
                                                                        <p>{timeline.date}</p>
                                                                    </h3>
                                                                    <h4 className='timeline-title'>
                                                                        {timeline.title}
                                                                    </h4>
                                                                    <p className='timeline-text'>
                                                                        {timeline.text}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='experience padd-15' data-aos={"fade-up"}>
                                        <h3 className='title'>Experience</h3>
                                        <div className='row'>
                                            <div className='timeline-box padd-15'>
                                                <div className='timeline'>
                                                    {experience.map((exp) => {
                                                        return (
                                                            <div>
                                                                <div className='timeline-items'>
                                                                    <div className='circle-dot'></div>
                                                                    <h3 className='timeline-date'>
                                                                        <BsFillCalendarDayFill />
                                                                        <p>{exp.date}</p>
                                                                    </h3>
                                                                    <h4 className='timeline-title'>
                                                                        {exp.title}
                                                                    </h4>
                                                                    <p className='timeline-text'>
                                                                        {exp.text}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>

    )
}

export default About