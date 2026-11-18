import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36">
      <h1 className="text-6xl font-bold">{title}</h1>
          <p className="text-lg">{overview}</p>
          <div>
              <button className="bg-gray-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded rounded">⏯️Play</button>
              <button className="mx-2  bg-gray-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4">More info </button>
        </div>
    </div>
  )
}

export default VideoTitle
