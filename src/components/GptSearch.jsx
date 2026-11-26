import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './gptSuggestion'
import { bgUrl } from '../utils/constants'
const GptSearch = () => {
  return (
      <div>
          <div className="absolute inset-0 -z-10"><img src={bgUrl} alt="Netflix Background" className="w-full h-screen object-cover"/></div>
        <GptSearchBar/>
        <GptSuggestion />
        
    </div>
  )
}

export default GptSearch
