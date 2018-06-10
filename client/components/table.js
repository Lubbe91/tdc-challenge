import React from 'react';
import Header from './tableHeader'
import Data from './getData'

export default class Table extends React.Component {

  render() {
    return (
      <tbody>
          <Header/>
          <Data/>
      </tbody>
    )
  }
}

