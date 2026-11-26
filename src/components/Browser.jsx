import React from 'react'
import Header from './Header.jsx'
import useNowPlaying from '../hooks/useNowPlaying.js'
import useTrending from '../hooks/useTrending.js'
import usePopular from '../hooks/usePopular.js'
import useUpcoming from '../hooks/useUpcoming.js'
import SecondaryContainer from './SecondaryContainer.jsx';
import Maincontainer from './Maincontainer.jsx';
import GptSearch from './GptSearch.jsx'
const Browser = () => {
  useNowPlaying();
  useTrending();
  usePopular();
  useUpcoming();

  return (
    <div>
      <GptSearch/>
      <Header />
      <Maincontainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
