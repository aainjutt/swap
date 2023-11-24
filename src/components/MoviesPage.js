import React, { useEffect, useState } from 'react'
import './MoviesPage.css'

import { Flex, Spin } from 'antd';
function MoviesPage() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItem = async () => {
    const url = 'https://swapi.dev/api/films'
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const data = (responseJson.results)
      setIsLoading(false);


      setMoviesData(data)
      console.log(data)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getItem();
  }, [])

  return (
    <>
      {isLoading && <Flex align="center" gap="middle" width="100%" margin='auto' >
        <Spin size="large" className='large' />
      </Flex>
      }
      <h1 className='title'>Movies Page</h1>
      <div className='main-container'>

        {moviesData && moviesData.map((movie, index) => (
          <div className='container' key={index} style={{ backgroundImage: `url(${movie.image})` }}>
            <h1 className='text'>{movie.title}</h1>
            <strong className='strong'>Director: {movie.director}</strong>
            <h2 className='strong-1'>Producer: {movie.producer}</h2>
            <small className='small'>{movie.release_date}</small>
            <p className='p'>{movie.opening_crawl}</p>

          </div>
        ))}
      </div>
    </>

  )
}



export default MoviesPage