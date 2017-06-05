import React, { Component } from 'react'
import styled from 'styled-components'

const Sesion = styled.div`
  flex: 1 50%;
  height: 50vh;
  background-size: 100%;
  color: #FFF;
  font-size: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 700;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  margin-top: 50px;
`

class PhotoGrid extends Component {
  static propTypes = {
    setSection: React.PropTypes.func
  }

  render () {
    return (
      <div>
        <MainDiv >
          <Sesion
            onClick={() => this.props.setSection('mia')}
            style={{backgroundImage: 'url(photos/sesiones/mia/mia4.jpg)', marginRight: 40}}>
            <div>
              Cumpleaños Mia
            </div>
          </Sesion>
          <Sesion
            onClick={() => this.props.setSection('chinito')}
            style={{backgroundImage: 'url(photos/sesiones/chinito/2.jpg)'}}>
            Sesión Chinito
          </Sesion>
        </MainDiv>
        <MainDiv>
          <Sesion
            onClick={() => this.props.setSection('dieguito')}
            style={{backgroundImage: 'url(photos/sesiones/dieguito/9.jpg)', marginRight: 40}}>
            Cumpleaños Dieguito
          </Sesion>
          <Sesion
            onClick={() => this.props.setSection('nicole')}
            style={{backgroundImage: 'url(photos/sesiones/nicole/5.jpg)'}}>
            Cumpleaños Nicole
          </Sesion>
        </MainDiv>
        <MainDiv>
          <Sesion
            onClick={() => this.props.setSection('claudiayflavio')}
            style={{backgroundImage: 'url(photos/sesiones/claudiayflavio/7.jpg)', marginRight: 40}}>
            Claudia y Favio
          </Sesion>
          <Sesion
            onClick={() => this.props.setSection('renato')}
            style={{backgroundImage: 'url(photos/sesiones/renato/8.jpg)'}}>
            Cumpleaños Renato
          </Sesion>
        </MainDiv>
      </div>
    )
  }
}

export default PhotoGrid
