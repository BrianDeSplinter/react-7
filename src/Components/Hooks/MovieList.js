import React, {useState} from 'react'

const MovieList= (props) => {
    const [movies, setMovies] = useState(['Alien', 'Cowboys Vs. Aliens', 'Alien vs. Predator'])
    const[input, setInput] = useState('')

    return (
    <div>
        {movies.map((movie, index) => {
        return <h2 key={index}>{movie}</h2>
        })}
        <input 
            placeholder='Add a movie' 
            onChange={e => setInput(e.target.value)}/>
        <button onClick={() => setMovies([...movies, input])}>Add to list</button>
    </div>
    )
}

export default MovieList