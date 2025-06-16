import React from 'react'
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestions from "../components/GptMovieSuggestions";
import { BG_URL } from '../utils/constants';
const GptSearch = () => {
  return (
    <div className=''>
      <img
        src={BG_URL}
        alt="logo"
      />
       <GptSearchBar/> 
       <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch