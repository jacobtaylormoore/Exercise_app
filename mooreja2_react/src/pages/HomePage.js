import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setMovieToEdit }) {
    const [movies, setMovies] = useState([]);
    const history = useHistory();
    const loadMovies = async () => {
        const response = await fetch('/movies');
        const data = await response.json();
        setMovies(data);
    }

    const onDelete = async id => {
        const response = await fetch(`/movies/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/movies');
            const movies = await getResponse.json();
            setMovies(movies);
        } else {
            console.error(`Failed to delete movie with id = ${id}, status code = ${response.status}`)
        }
    };

    const onEdit = movie => {
        setMovieToEdit(movie);
        history.push("/edit-movie");
    };

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <>
            <h2>List of Movies</h2>
            <MovieList movies={movies} onDelete={onDelete} onEdit={onEdit}></MovieList>
            <Link to="/add-movie">Add a movie</Link>
        </>
    );
}

export default HomePage;