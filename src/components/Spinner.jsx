import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center mt-4 mb-4' style={{ height: '80vh' }}>
        <div className="loading"></div>
      </div>
    )
  }
}
