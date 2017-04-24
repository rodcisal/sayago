import React, { Component } from 'react'
import './App.css'
import Slider from 'react-slick'
import ChevronRight from './ChevronRight'
import photos from './photos'

export default class App extends Component {
  render () {
    console.log(photos)
    const mainTextStyles = {
      fontSize: 48,
      fontWeight: 'lighter',
      paddingTop: 40,
      color: '#9E9E9E'
    }
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true
    }
    return (
      <div className='App'>
        <h1 style={mainTextStyles}> Paulina Sayago </h1>
        <div className='container'>
          <Slider {...settings}>
            {photos.map((photo) => {
              return (
                <div>
                  <img src={`photos/${photo}`} style={{width: '100%'}} />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    )
  }
}
