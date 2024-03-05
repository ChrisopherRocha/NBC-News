import React from 'react'
import '../styles/RightSection.css'

function RightSection({ headlines }) {
  return (
    <div className='rightSide'>
      {headlines.map((headline) => {
        return (
            <ul>
                <li><a href={headline.url}>{headline.title}</a></li>
            </ul>
        )
      })}
    </div>
  )
}

export default RightSection
