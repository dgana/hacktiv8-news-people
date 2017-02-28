import React, { Component } from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Search } from './Search.js'
import { Header } from '../Header/Header.js'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      currentSearch: '',
      hackerNewsList: []
    }
  }

  componentDidMount () {
    this.fetchNews('')
  }

  fetchNews (searchQuery) {
    const that = this
    fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURI(searchQuery)}`)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data.hits)
        that.setState({
          hackerNewsList: data.hits
        })
      })
  }

  handleChange (e) {
    this.setState({
      currentSearch: e.target.value
    })
    this.fetchNews(e.target.value)
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Hacktiv8 News</h1>
        <Search handleChange={this.handleChange.bind(this)} />
        <ul className='center'>
          {this.state.hackerNewsList
             .filter(item => {
               return item.title !== '' && item.title !== null})
             .map((item, index) => {
               return (
                 <li key={index}>
                   <a href={item.url} className='style-text' target='_blank'>
                     {item.title}
                   </a>
                 </li>
               )
             })}
        </ul>
      </div>
    )
  }
}

export default Main
