import React, { Component } from 'react'
import './App.css'
import Slider from 'react-slick'
import ChevronRight from './ChevronRight'
import photos from './photos'
import ReactDOM from 'react-dom'

export default class App extends Component {
  componentDidMount = () => {
    const imgs = ReactDOM.findDOMNode(this.refs.slider).querySelectorAll('img')
    console.log('imgs', imgs)
    let loadedImgs = 0
    imgs.forEach((img) => {
      img.onload = () => {
        loadedImgs += 1
        if (loadedImgs === imgs.length) {
          this.refs.slider.innerSlider.adaptHeight()
        }
      }
    })
  }

  render () {
    console.log(photos)
    const mainTextStyles = {
      fontSize: 48,
      fontWeight: 'lighter',
      color: '#9E9E9E'
    }
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true,
      accesibility: true,
      useCSS: true
    }

    return (
      <div className='App'>
        <h1 style={mainTextStyles}> Paulina Sayago </h1>
        <div className='container'>
          <Slider {...settings} ref='slider'>
            {photos.map((photo) => {
              return (
                <div key={photo}>
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
