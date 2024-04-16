import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/moviesContainer/MovieCard';
import axios from 'axios';
import { CircularProgress, Pagination } from '@mui/material';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const totalPages = 5;

  useEffect(() => {
    setLoading(true);
    
    getAllMovies();
  }, [currentPage]);


  // const getAllMovies = async () => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://ott-details.p.rapidapi.com/advancedsearch',
  //     params: {
  //       start_year: '1970',
  //       end_year: '2020',
  //       min_imdb: '6',
  //       max_imdb: '7.8',
  //       genre: 'action',
  //       language: 'english',
  //       type: 'movie',
  //       sort: 'latest',
  //       page: currentPage
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': '53a74c30a1msh45826694947e490p13d35djsnec7be0436679',
  //       'X-RapidAPI-Host': 'ott-details.p.rapidapi.com' 
  //     }
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     setMovies(response.data.results);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getAllMovies = async() => {
    const options = {
      method: 'GET',
      url: process.env.REACT_APP_MOVIE_URL,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_MOVIE_HOST 
      }

    };

    try {
      const response = await axios.request(options);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  }
  

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <CircularProgress style={{ display: 'block' }} />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={paginate}
        color="primary"
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </div>
  );
};

export default MoviePage;

