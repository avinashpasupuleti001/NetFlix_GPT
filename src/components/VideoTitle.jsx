import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-24 absolute bg-gradient-to-r from-black to-transparent w-full h-full flex flex-col justify-center items-start pl-12">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <h2 className="text-lg text-lg w-1/4 text-white">{overview}</h2>
      <div>
        <br />
        <br/>
              <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded rounded">⏯️Play</button>
              <button className="mx-2  bg-gray-600 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded ml-4 bg-opacity-50 ">More info </button>
        </div>
    </div>
  )
}

export default VideoTitle
