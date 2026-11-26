import React from 'react'
import lang from '../utils/LangConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    const langkey=useSelector(store=>(store.config.lang))
  return (
    <div>
          <form className="mx-auto flex w-full max-w-3xl items-center gap-3 px-6 pt-32">
              <input type="text" className="min-w-0 flex-1 rounded-lg bg-white p-4 text-black" placeholder={lang[langkey].movieSearch} />
              <button className="rounded-lg bg-red-700 px-6 py-4 text-white">{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
