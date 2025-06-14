import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute top-2/4 left-10 text-white '>
      <h1 className='text-4xl py-3 font-bold'>{title}</h1>
      <p className='w-1/6 font-light '>{overview}</p>
      <div className='mt-3'>
        <button className='px-4 py-3 bg-gray-200 text-white text-lg bg-opacity-10'>▶ Play</button>
        <button className='px-4 py-3 bg-gray-200 text-white mx-4 text-lg bg-opacity-10'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle