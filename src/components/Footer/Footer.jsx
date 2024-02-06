import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className='pt-5'>
        <div className='container'>
            <div className='row justify-content-between gy-5 '>
                <div className='col-md-6 col-lg-4'>
                    <div className='location text-center '>
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='around text-center'>
                        <h3>AROUND THE WEB</h3>
                        <ul className='links'>
                            <li>
                                <a href='/'>
                                    <i className='fa-brands fa-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                    <i className='fa-brands fa-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                    <i className='fa-brands fa-linkedin-in'></i>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                    <i className='fa-solid fa-globe '></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='about-freelancer text-center'>
                        <h3 className=''>ABOUT FREELANCER</h3>
                        <p className='m-0'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-center m-0 mt-4 py-3 coptright'>Copyright © Your Website 2021</p>
      </footer>
    )
  }
}
