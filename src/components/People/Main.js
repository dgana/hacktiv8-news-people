import React, { Component } from 'react'
import '../../App.css'

import { Header } from '../Header/Header'

class People extends Component {
  constructor () {
    super()
    this.state = {
      PeopleList: []
    }
  }

  componentDidMount () {
    fetch(`http://swapi.co/api/people/`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          PeopleList: data.results
        })
      })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Hacktiv8 Peoples</h1>
        <ul className='center'>
          {this.state.PeopleList
             .map((item, index) => {
               return (
                 <p key={index}>
                   {item.name}
                 </p>
               )
             })}
        </ul>
      </div>
    )
  }
}

export default People
