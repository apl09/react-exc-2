import React from 'react'
import  './header.css'

const Header = (props) => {
  return (
    <div className='header'>
        <h1>Hello I'm {props.name}, this is my personal Web Page</h1>
        <p>I love coding with React and I'll show you in next projects</p>
      
    </div>
  )
}

export default Header
