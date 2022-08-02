import React, { useEffect } from 'react'
import './project.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectData } from './ProjectData';
import AOS from 'aos';


const Project = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  const data = ProjectData;

  return (
    <div className='projects'>
      <section className='portfolio section'>
        <div className='container'>
          <div className='row'>
            <div className='section-title padd-15'>
              <h2>Projects</h2>
            </div>
          </div>

          <div className='row'>
            <div className='portfolio-heading padd-15'>
              <h2>Some of my <span>Projects </span>:</h2>
            </div>
          </div>

          <div className='row'>
            {data.map((project) => {
              return (
                <div className='portfolio-item padd-15' data-aos={"zoom-in"}>
                  <Card sx={{ maxWidth: 280 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small"><a href={project.view} target='_blank'> View Project</a></Button>
                    </CardActions>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project