import React, { Component } from 'react'
import TryGlass from './TryGlass'

export default class VirtualGlass extends Component {
  render() {
    return (
      <div className='VRglasses'>
        <h2 className='title  text-white text-center py-5'>Virtual Glass</h2>
        <div className="row container-fluid">
            <TryGlass/>
        </div>
      </div>
    )
  }
}
