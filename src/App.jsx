    import Navbar from './components/Navbar';
    import SearchBar from './components/SearchBar';
    import MovieList from './components/MovieList';
    import {useNavigate} from "react-router-dom";
    import { Route,Routes } from 'react-router-dom';
    import Error from './components/Error';
    import {useState,useEffect} from 'react';
    import MovieDetails from './components/MovieDetails';

    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


    async function fetchMovies(searchTerm) {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      const data = await response.json();
        if(data.Response === "False") {
          throw new Error(data.Error);
        }
      console.log("Fetched Movies:", data.Search);
      return data.Search;
    }




    function App() {

      const [searchTerm, setSearchTerm] = useState('');
      const [movies, setMovies] = useState([]);
      const [loading, setLoading] = useState(false);
      const  [error, setError] = useState(null);
    


      useEffect(()=>{
        if(searchTerm.trim() === ''){
          setMovies([]);
          return;
        }

        async function loadMovies(){
          try {
            setLoading(true);
            setError(null);
            const moviesData = await fetchMovies(searchTerm);
            setMovies(moviesData);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }

        loadMovies();

      },[searchTerm]);

      const navigate = useNavigate();


      return (
        <div className="app">
        <Routes>
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/" element={
            <>
              <Navbar />
              <main className="page-content">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className="container">
                  <MovieList movies={movies} loading={loading} error={error} />
                </div>
              </main>
            </>
          } />
          <Route path="*" element={<Error />} />
        </Routes>
        
        </div>
      );
    }




    export default App;
