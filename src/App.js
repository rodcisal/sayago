import React, { Component } from 'react'
import './App.css'
import Slider from 'react-slick'
import AngleLeft from './AngleLeft'
import photos from './photos'
import ReactDOM from 'react-dom'
import AngleRight from 'react-icons/lib/fa/angle-right'

const SampleNextArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <button onClick={onClick} style={{left: -25, position: 'absolute', padding: 0, transform: 'translate(0, -50%)', top: '50%', border: 0, background: 'none'}}>
      <AngleLeft style={{fontSize: 60, color: '#9E9E9E'}} />
    </button>
  )
}

const SamplePrevArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <button onClick={onClick} style={{right: -25, position: 'absolute', padding: 0, transform: 'translate(0, -50%)', top: '50%', border: 0, background: 'none'}}>
      <AngleRight style={{fontSize: 60, color: '#9E9E9E'}} />
    </button>
  )
}

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
    const mainTextStyles = {
      fontSize: 48,
      fontWeight: 'lighter',
      color: '#9E9E9E'
    }
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      accesibility: true,
      useCSS: true,
      prevArrow: <SampleNextArrow {...this.props} />,
      nextArrow: <SamplePrevArrow {...this.props} />
    }

    return (
      <div className='App'>
        <h1 style={mainTextStyles}> Paulina Sayago </h1>
        <div className='container'>
          <Slider {...settings} ref='slider'>
            {photos.map((photo) => {
              return (
                <div key={photo}>
                  <img src={`photos/${photo}`} style={{width: 'auto', height: '80vh', margin: '0 auto'}} />
                </div>
              )
            })}
          </Slider>
          <div style={{marginTop: 30, color: '#9E9E9E' }}>
            Contacto: <a style={{color: '#9E9E9E'}} href='mailto:sayago1983@gmail.com'> sayago1983@gmail.com </a>
          </div>
        </div>
      </div>
    )
  }
}
