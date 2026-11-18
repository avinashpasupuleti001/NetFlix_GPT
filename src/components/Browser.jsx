import React from 'react'
import Header from './Header.jsx'
import useNowPlaying from '../hooks/useNowPlaying.js'
import SecondaryContainer from './SecondaryContainer.jsx';
import Maincontainer from './Maincontainer.jsx';
const Browser = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
      <Maincontainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
