import React from 'react'

const Movies = ({movies}) => {
  return (
    <div className='movie_box'  >
        <div className='movie_card' >
        <h1>Movie name:  <span>{movies.name}</span></h1>
        <p> Ratings: {movies.ratings}</p>
        <p> Release Date: {movies.release_date}</p>

        </div>


    </div>
  )
}

export default Movies