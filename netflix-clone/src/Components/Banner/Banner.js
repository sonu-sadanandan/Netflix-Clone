import React from 'react'
import "./Banner.css"; // Assuming you have a CSS file for styling

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'> Play </button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>
                This is a description of the movie. It gives an overview of the plot, characters, and setting. 
            </h1>
        </div>
      
    </div>
  )
}

export default Banner
