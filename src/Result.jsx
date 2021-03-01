import React, { Component } from 'react'

class Result extends Component {
  render() {
    const result = this.props.result
    if (result.codeResult.code=='123456789'){
      return (
        <li>
          {' '}
        bangalore{' '}
        </li>
      )
    }
    if (result.codeResult.code=='987654321'){
      return (
        <li>
          {' '}
        Bhopal{' '}
        </li>
      )
    }
    if (result.codeResult.code=='654321789'){
      return (
        <li>
          {' '}
        New delhi{' '}
        </li>
      )
    }
    if (!result) {
      return null
    }

    return (
      <li>
        {' '}
        {result.codeResult.code} [{result.codeResult.format}]{' '}
      </li>
    )
  }
}

export default Result
