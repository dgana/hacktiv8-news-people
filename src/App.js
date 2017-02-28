import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Search } from './components/Search.js'
// import NewsList from './components/NewsList.js'

class App extends Component {
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
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
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

export default App
