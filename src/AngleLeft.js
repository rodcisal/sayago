import React from 'react'
import AngleLeft from 'react-icons/lib/fa/angle-left'

export default class LeftButton extends React.Component {

  static propTypes = {

  }

  render () {
    return (
      <AngleLeft {...this.props} />
    )
  }
}
