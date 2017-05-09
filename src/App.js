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

  state = {
    currentSection: null
  }

  renderNavBar () {
    return (
      <div className='siteNavBar'>
        <h1 style={{cursor: 'pointer'}} onClick={() => this.setState({currentSection: null})}> Paulina Sayago </h1>
        <div>
          <div
            style={{cursor: 'pointer'}}
            onClick={() => this.setState({currentSection: 'sobreMi'})}>SOBRE MI</div>
          <div
            style={{cursor: 'pointer'}}
            onClick={() => this.setState({currentSection: 'sesiones'})}>SESIONES</div>
        </div>
      </div>
    )
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

    if (this.state.currentSection === 'sesiones') {
      return (
        <div className='App'>
          {this.renderNavBar()}

          <div className='sesiones'>
            <div
              style={{
                backgroundImage: 'url(/photos/sesiones/chinito/9.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '-184px center'
              }}
              className='block'
              onClick={() => this.setState({currentSection: 'chinito'})}>
              </div>
            <div
              style={{
                backgroundImage: 'url(/photos/sesiones/dieguito/1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '-27px center'
              }}
              className='block'
              onClick={() => this.setState({currentSection: 'dieguito'})}>
              </div>
            <div
              style={{
                backgroundImage: 'url(/photos/sesiones/mia/mia4.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '-10px center'
              }}
              className='block'
              onClick={() => this.setState({currentSection: 'mia'})}>
              </div>
          </div>
        </div>
      )
    }

    if (this.state.currentSection === 'chinito') {
      const photos = 14
      let results = []
      for (let i = 1; i < photos + 1; i++) {
        results.push(
          <div>
            <img src={`/photos/sesiones/chinito/${i}.jpg`} />
          </div>
        )
      }
      return (
        <div className='App'>
          {this.renderNavBar()}
          <h1 className='cumpleanos'>SESIÓN CHINITO</h1>
          {results}
        </div>
      )
    }

    if (this.state.currentSection === 'dieguito') {
      const photos = 19
      let results = []
      for (let i = 1; i < photos + 1; i++) {
        results.push(
          <div>
            <img src={`/photos/sesiones/dieguito/${i}.jpg`} />
          </div>
        )
      }
      return (
        <div className='App'>
          {this.renderNavBar()}
          <h1 className='cumpleanos'>CUMPLEAÑOS DIEGO</h1>
          {results}
        </div>
      )
    }

    if (this.state.currentSection === 'mia') {
      const photos = 18
      let results = []
      for (let i = 1; i < photos + 1; i++) {
        results.push(
          <div>
            <img src={`/photos/sesiones/mia/mia${i}.jpg`} />
          </div>
        )
      }
      return (
        <div className='App'>
          {this.renderNavBar()}
          <h1 className='cumpleanos'>CUMPLEAÑOS MIA</h1>
          {results}
        </div>
      )
    }

    if (this.state.currentSection === 'sobreMi') {
      return (
        <div className='App'>
          {this.renderNavBar()}
          <div style={{marginTop: 30, fontSize: 22, padding: '0px 470px', color: 'grey', marginBottom: 100, fontWeight: 'lighter', textAlign: 'left'}}>
            <img src='/sobre_mi.jpg' alt='' style={{maxWidth: '100%', marginBottom: 30}} />
            <p>Hola soy Paulina nací en La Ligua, viví en La Serena y hoy disfruto Santiago.</p>
            <p>Soy fotógrafa aficionada, mi mente comenzó a tomar fotos hasta que se hizo urgente llevarlo a la acción
            y en poco tiempo se convirtío en pasión.</p>
            <p>
              Mientras menos posadas las fotos más me gustan y mejor quedan a mi parecer.
            </p>
            <p>Si te gusta lo que ves, conversemos:</p>
            <div style={{marginTop: 30, color: '#9E9E9E'}}>
              <a style={{color: '#9E9E9E'}} href='mailto:sayago1983@gmail.com'> sayago1983@gmail.com </a>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className='App'>
        {this.renderNavBar()}
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
          <div style={{marginTop: 30, color: '#9E9E9E'}}>
            <a style={{color: '#9E9E9E'}} href='mailto:sayago1983@gmail.com'> sayago1983@gmail.com </a>
          </div>
        </div>
      </div>
    )
  }
}
