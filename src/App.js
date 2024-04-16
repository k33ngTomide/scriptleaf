import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ShowGlass from './pages/showRoom/ShowGlass';
import BookPage from './pages/bookPage/BookPage';
import MoviePage from './pages/moviePage/MoviePage';


function App() {

  return (
    <Routes>
      <Route 
        path= '/'
        element={<Home/>}
        children={[ 
          <Route path= '/' element= {<BookPage/>}/>,
        ]}
      
      />

      <Route 
        path= '/show'
        element={<ShowGlass/>}
        children={[ 
          <Route path= '/show/books' element= {<BookPage/>}/>,
          <Route path= '/show/movies' element= {<MoviePage/>}/>,
        ]}
      
      />
    </Routes>

  );
}

export default App;
