
import Title from '../Title/Title';
import './Home.css';
import React,{ Component } from 'react'

export default class Home extends Component {
  componentDidMount(){
    document.title = "Home";
  }
  render() {
    return (
      <div>
         <section id='home'>
      <div className='container'>
          <div className='box'>
              <img src='imgs/avataaars.svg' alt='' className='w-100' />
              <Title title = {"START FRAMEWORK"} />
              <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
      </div>
    </section>
      </div>
    )
  }
}
