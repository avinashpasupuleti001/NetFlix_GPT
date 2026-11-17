import React from 'react'
import Header from './Header.jsx'
import useNowPlaying from '../hooks/useNowPlaying.js'
const Browser = () => {
  useNowPlaying();

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browser
