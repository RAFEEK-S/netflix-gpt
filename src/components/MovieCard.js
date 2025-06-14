
import {IMG_CDN_URL} from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="min-w-[150px]">
        <img src={IMG_CDN_URL + posterPath} 
        alt="movie card"
        className="w-full h-auto rounded-md shadow-md"/>
    </div>
  )
}

export default MovieCard