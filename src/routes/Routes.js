import BookContainer from "../components/booksContainer/BookContainer";
import MovieContainer from "../components/moviesContainer/MovieContainer";
import Home from "../pages/home/Home";
import ShowGlass from "../pages/showRoom/ShowGlass";



const ROUTES = [
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <BookContainer/>,
        
      },
      {
        path: '/',
        element: <MovieContainer/>,
        
      }
    ]
  },
  {
    path: '/movies',
    element: <ShowGlass show={'Movies'}/>,
    children: [
      
    ]
  },
  {
    path: '/books',
    element: <ShowGlass show={'Books'}/>,
    children: [
      
    ]
  }
]

export default ROUTES;