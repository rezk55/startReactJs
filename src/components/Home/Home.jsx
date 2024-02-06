
import React, { useEffect } from 'react';
import Title from '../Title/Title';
import './Home.css';

export default function Home () {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <section id='home'>
      <div className='container'>
          <div className='box'>
              <img src='imgs/avataaars.svg' alt='' className='w-100' />
              <Title title = {"START FRAMEWORK"} />
              <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
      </div>
    </section>
  )
}
