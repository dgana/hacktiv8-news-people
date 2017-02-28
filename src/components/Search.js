import React from 'react'

export const Search = (props) => {
  return (
    <div className='search-news'>
      <form>
        <input type='text' onChange={props.handleChange} />
      </form>
    </div>
  )
}
