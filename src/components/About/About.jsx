
import { useEffect } from 'react';
import Title from '../Title/Title';
import './About.css';

export default function About () {
  useEffect(() => {
    document.title = "About";
  });
  return (
    <section id='about' className='d-flex'>
      <div className='container h-50 my-auto'>
        <Title title = {"ABOUT COMPONENT"} />
        <div className='about-desc text-white'>
          <p className=''>Freelancer is a free bootstrap theme created by Route. 
          The download includes the complete source files including HTML, 
          CSS, and JavaScript as well as optional SASS stylesheets for easy 
          customization.
          </p>
          <p>Freelancer is a free bootstrap theme created by Route. 
          The download includes the complete source files including HTML, 
          CSS, and JavaScript as well as optional SASS stylesheets for easy 
          customization.
          </p>
        </div>
      </div>
    </section>
  )
}
