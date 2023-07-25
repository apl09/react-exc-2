import React from 'react'
import './footer.css'

const Footer = (props) => {
    console.log(props)
  return (
    <div className='footer'>
       <p>contact me on social networks</p>
       <div>
       <a href={props.link}>Contact me on Linkedin</a>
       
       </div>
    </div>
  )
}

export default Footer
