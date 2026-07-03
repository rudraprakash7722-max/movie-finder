  import Navbar from './components/Navbar';
  import SearchBar from './components/SearchBar';
  import MovieList from './components/MovieList';
  import Loader from './components/Loader';
  import Error from './components/Error';
  import {useState} from 'react';
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
    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
      return (
        <div className="app">
          <Navbar />
          <main className="page-content">
            <div className="container">
              <MovieDetails movie={selectedMovie} />
              <button className="back-button" onClick={() => setSelectedMovie(null)}>Back to Search</button>
            </div>
          </main>
        </div>
      );
    }


    
    async function handleSearch() {
            try{ 
              setLoading(true);
              setError(null);

              let fetchedMovies = await fetchMovies(searchTerm);
              if (fetchedMovies.length === 0) {
                setError('No movies found');
              } else {
                setMovies(fetchedMovies);
              }}
              catch (error) {
                setError(error.message);
              }
              finally {
                setLoading(false);
              }
            }
      
      async function handleMovieClick(imdbID) {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
          const data = await response.json();
          setSelectedMovie(data);

          if (data.Response === "False") {
            throw new Error(data.Error);
          }
          console.log("Fetched Movie Details:", data);
        
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

    

    return (
      <div className="app">
        <Navbar />
        <main className="page-content">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
          <div className="container">
            <MovieList movies={movies} loading={loading} error={error} handleMovieClick={handleMovieClick}
            setSelectedMovie={setSelectedMovie} />
          </div>
        </main>
      </div>
    );
  }

  export default App;
