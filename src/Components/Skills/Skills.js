import React, { useEffect } from 'react'
import './skills.css'
import { SkillsData } from './SkillsData'
import { ToolsData } from './ToolsData';
import AOS from 'aos';

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  const data = SkillsData;
  const tools = ToolsData;

  return (
    <section className='skills section'>
      <div className='container'>
        <div className='row'>
          <div className='section-title padd-15'>
            <h2>Skills</h2>
          </div>
        </div>

        <div className='sub-heading'>
          <h2>Here are some of my <span>Professional Skillset</span></h2>
        </div>


        <div className='row'>
          {data.map((skill) => {
            return (
              <div className='skill-item padd-15'>
                <div className='skill-item-inner' data-aos={"flip-left"}>
                  <div className='skill-icon'>
                    {skill.content}
                  </div>
                  <h4>{skill.title}</h4>
                </div>
              </div>
            )
          })}
        </div>

        <div className='sub-heading tools'>
          <h2>These are the <span>Tools </span> I use</h2>
        </div>

        <div className='row'>
          {tools.map((tool) => {
            return (
              <div className='skill-item padd-15'>
                <div className='skill-item-inner' data-aos={"flip-left"}>
                  <div className='skill-icon'>
                    {tool.content}
                  </div>
                  <h4>{tool.title}</h4>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills