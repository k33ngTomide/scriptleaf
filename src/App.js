import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BookContainer from './components/booksContainer/BookContainer';


function App() {

  return (
    <Routes>
      <Route 
        path= '/'
        element={<Home/>}
        children={[ 
          <Route path= '/' element= {<BookContainer/>}/>
        ]}
      
      />
    </Routes>

  );
}

export default App;
