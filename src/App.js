
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import MovieList from './component/movieList/MovieList';
import Home from './pages/home/Home';
import MovieDetails from './component/card/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route index element={ <Home />}></Route>
          <Route path='movie/:id' element={<MovieDetails />}></Route>
          <Route path='movies/:type' element={ <MovieList /> }></Route>
          <Route path='/*' element={<h4>error page</h4>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
