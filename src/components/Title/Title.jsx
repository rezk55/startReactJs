import React, { Component } from 'react'
import './Title.css'


export default class Title extends Component {
   
  render() {
    return (
      <div>
        <h1 className='fw-bold mt-5 mb-4 text-center'>{this.props.title}</h1>
        <div className='line-star mb-3'>
            <span></span>
            <i className='fa-solid fa-star'></i>
            <span></span>
        </div>
      </div>
    )
  }
}
