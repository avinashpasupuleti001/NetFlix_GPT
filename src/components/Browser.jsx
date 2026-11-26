import React from 'react'
import Header from './Header.jsx'
import useNowPlaying from '../hooks/useNowPlaying.js'
import useTrending from '../hooks/useTrending.js'
import usePopular from '../hooks/usePopular.js'
import useUpcoming from '../hooks/useUpcoming.js'
import SecondaryContainer from './SecondaryContainer.jsx';
import Maincontainer from './Maincontainer.jsx';
import GptSearch from './GptSearch.jsx'
import { useSelector } from 'react-redux'
import store from '../utils/appStore.js'
const Browser = () => {
  const gptval = useSelector((store) => store.gpt.showgpt);
  console.log(gptval)
  useNowPlaying();
  useTrending();
  usePopular();
  useUpcoming();

  return (
    <div>
      <Header />
      {gptval ? (<GptSearch />) :
        <>
        <Maincontainer />
        <SecondaryContainer/>
        </>
      }
    </div>
  )
}

export default Browser
