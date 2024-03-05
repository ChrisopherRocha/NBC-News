import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://www.nbc.com/generetic/generated/images/4fac8d8aaa7d8798a512dac0322d8d14.png" />
      <h4><a href='/'>Politics</a></h4>
        <h4><a href='/about'>U.S. News</a></h4>
        <h4><a href='/about'>World</a></h4>
        <h4><a href='/about'>Business</a></h4>
        <h4><a href='/about'>Video</a></h4>
        <h4><a href='/about'>U.S. News</a></h4>
        <h4><a href='/about'>Live</a></h4>
    </div>
  )
}

export default Navbar
