import React, { Component } from 'react'
import './App.css'
import Slider from 'react-slick'
import AngleLeft from './AngleLeft'
import photos from './photos'
import ReactDOM from 'react-dom'
import AngleRight from 'react-icons/lib/fa/angle-right'
import PhotoGrid from './PhotoGrid'
import InstagramIcon from 'react-icons/lib/fa/instagram'
import Facebookicon from 'react-icons/lib/fa/facebook-official'
import EnvelopeIcon from 'react-icons/lib/fa/envelope-square'

const SampleNextArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <button onClick={onClick} style={{cursor: 'pointer', left: -60, position: 'absolute', padding: 0, transform: 'translate(0, -50%)', top: '50%', border: 0, background: 'none'}}>
      <AngleLeft style={{fontSize: 60, color: '#9E9E9E'}} />
    </button>
  )
}

const SamplePrevArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <button onClick={onClick} style={{cursor: 'pointer', right: -60, position: 'absolute', padding: 0, transform: 'translate(0, -50%)', top: '50%', border: 0, background: 'none'}}>
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

  setSection = (section) => {
    this.setState({currentSection: section})
    window.scrollTo(0, 0)
  }

  renderNavBar () {
    return (
      <div className='siteNavBar'>
        <h1 style={{cursor: 'pointer'}} onClick={() => this.setState({currentSection: null})}> Paulina Sayago </h1>
        <div>
          <div
            style={{cursor: 'pointer'}}
            onClick={() => this.setState({currentSection: 'sesiones'})}>SESIONES</div>
          <div
            style={{cursor: 'pointer'}}
            onClick={() => this.setState({currentSection: 'sobreMi'})}>SOBRE MI</div>
          <div
            style={{cursor: 'pointer'}}
            onClick={() => this.setState({currentSection: 'sobreMi'})}>CONTACTO</div>
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
      adaptiveHeight: false,
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
              <button type='button' className='seeMore'> VER MAS </button>
              </div>
            <div
              style={{
                backgroundImage: 'url(/photos/sesiones/dieguito/1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '-27px center'
              }}
              className='block'
              onClick={() => this.setState({currentSection: 'dieguito'})}>
              <button type='button' className='seeMore'> VER MAS </button>
              </div>
          </div>
          <div className='sesiones'>
            <div
              style={{
                backgroundImage: 'url(/photos/sesiones/mia/mia4.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '-10px center'
              }}
              className='block'
              onClick={() => this.setState({currentSection: 'mia'})}>
              <button type='button' className='seeMore'> VER MAS </button>
              </div>
            <div
              style={{
                backgroundImage: 'url(/photos/sesiones/claudiayflavio/1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '-10px center'
              }}
              className='block'
              onClick={() => this.setState({currentSection: 'cyf'})}>
              <button type='button' className='seeMore'> VER MAS </button>
              </div>
          </div>
          <div className='sesiones'>
            <div
              style={{
                backgroundImage: 'url(/photos/sesiones/renato/8.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '-10px center'
              }}
              className='block'
              onClick={() => this.setState({currentSection: 'renato'})}>
              <button type='button' className='seeMore'> VER MAS </button>
              </div>
            <div
              style={{
                backgroundImage: 'url(/photos/sesiones/nicole/5.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '-10px center'
              }}
              className='block'
              onClick={() => this.setState({currentSection: 'nicole'})}>
              <button type='button' className='seeMore'> VER MAS </button>
              </div>
          </div>
        </div>
      )
    }

    if (this.state.currentSection === 'chinito') {
      const photos = 14
      let results = []
      const banned = [7, 12]
      for (let i = 1; i < photos + 1; i++) {
        if (!banned.includes(i)) {
          results.push(
            <div className='sesion-container'>
              <img src={`/photos/sesiones/chinito/${i}.jpg`} />
            </div>
          )
        }
      }
      return (
        <div className='App Sesion'>
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
          <div className='sesion-container'>
            <img src={`/photos/sesiones/dieguito/${i}.jpg`} />
          </div>
        )
      }
      return (
        <div className='App Sesion'>
          {this.renderNavBar()}
          <h1 className='cumpleanos'>CUMPLEAÑOS DIEGO</h1>
          {results}
        </div>
      )
    }

    if (this.state.currentSection === 'renato') {
      const photos = 13
      let results = []
      for (let i = 1; i < photos + 1; i++) {
        results.push(
          <div className='sesion-container'>
            <img src={`/photos/sesiones/renato/${i}.jpg`} />
          </div>
        )
      }
      return (
        <div className='App Sesion'>
          {this.renderNavBar()}
          <h1 className='cumpleanos'>CUMPLEAÑOS RENATO</h1>
          {results}
        </div>
      )
    }

    if (this.state.currentSection === 'nicole') {
      const photos = 19
      let results = []
      for (let i = 1; i < photos + 1; i++) {
        results.push(
          <div className='sesion-container'>
            <img src={`/photos/sesiones/nicole/${i}.jpg`} />
          </div>
        )
      }
      return (
        <div className='App Sesion'>
          {this.renderNavBar()}
          <h1 className='cumpleanos'>CUMPLEAÑOS NICOLE</h1>
          {results}
        </div>
      )
    }

    if (this.state.currentSection === 'mia') {
      const photos = 17
      let results = []
      for (let i = 1; i < photos + 1; i++) {
        results.push(
          <div className='sesion-container'>
            <img src={`/photos/sesiones/mia/mia${i}.jpg`} />
          </div>
        )
      }
      return (
        <div className='App Session'>
          {this.renderNavBar()}
          <h1 className='cumpleanos'>CUMPLEAÑOS MIA</h1>
          {results}
        </div>
      )
    }

    if (this.state.currentSection === 'cyf') {
      const photos = 10
      let results = []
      const banned = [1, 8]
      for (let i = 1; i < photos + 1; i++) {
        if (!banned.includes(i)) {
          results.push(
            <div className='sesion-container'>
              <img src={`/photos/sesiones/claudiayflavio/${i}.jpg`} />
            </div>
          )
        }
      }
      return (
        <div className='App Single'>
          {this.renderNavBar()}
          <h1 className='cumpleanos'>CLAUDIA Y FAVIO</h1>
          {results}
        </div>
      )
    }

    if (this.state.currentSection === 'sobreMi') {
      return (
        <div className='App'>
          {this.renderNavBar()}
          <div className='whoami'>
            <img src='/sobre_mi.jpg' alt='' style={{maxWidth: '100%', marginBottom: 30}} />
            <p>Hola, soy Paulina nací en La Ligua, viví en La Serena y hoy disfruto Santiago.</p>
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
        <div className='siteNavBar--socialNetwork'>
          <a href='https://www.facebook.com/paulinasayagofotos/' target='_blank'>
            <Facebookicon />
          </a>
          <a href='https://www.instagram.com/paulisayago/' target='_blank'>
            <InstagramIcon />
          </a>
          <a href='mailto:sayago1983@gmail.com' target='_blank'>
            <EnvelopeIcon />
          </a>
        </div>
        <div className='container'>
          <Slider {...settings} ref='slider'>
            {photos.map((photo) => {
              return (
                <div
                  key={photo}
                  style={{backgroundImage: `url('photos/${photo}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 700, backgroundPosition: 'center center'}}>
                </div>
              )
            })}
          </Slider>
          <PhotoGrid setSection={this.setSection} />
        </div>
      </div>
    )
  }
}
