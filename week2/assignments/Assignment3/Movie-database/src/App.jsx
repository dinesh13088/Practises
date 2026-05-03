import { useState } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import MovieCard from './components/MovieCard'

function App() {
  const [name, setMovieName] = useState("")
  const [moviesData, SetMoviesData] = useState("")
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchMoviedata(name)

  }
  const fetchMoviedata = async (movieName) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    SetMoviesData(data)
    return data
  }

  return (
    <>
      <header className='header'>
        <h1>Movie Database</h1>
      </header>
      <main><SearchForm name={name} setMovieName={setMovieName} handleSubmit={handleSubmit} />
        <div className='movieslist'>{
          moviesData && moviesData.results.map((item, index) => (
            <MovieCard MoviesData={item} key={item.id} />
          ))
        }
        </div>
      </main>
      <footer>

      </footer>
    </>

  )
}

export default App
