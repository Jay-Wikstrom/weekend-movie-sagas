import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';


function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();

    const genres = useSelector((store) => store.genres);

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const handleSaveClick = (e) => {
        e.preventDefault();
        history.push('/');

        dispatch({
            type: 'ADD_MOVIE',
            payload:{
                title: title,
                poster: poster,
                description: description,
                genre: genre
            }
        })
    }

    const handleCancelClick = () => {
        setTitle('');
        setPoster('');
        setDescription('');
        setGenre('');
        history.push('/');
    }

    return (
        <div>
            <form onSubmit={handleSaveClick}>
                <input
                    type="text"
                    placeholder="Movie Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
                <input
                    type="text"
                    placeholder="Movie Poster"
                    onChange={(e) => setPoster(e.target.value)}
                    value={poster}
                    required
                />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                >

                </textarea>

                <select name="genre" onChange={(e) => setGenre(e.target.value)}>
                    {genres.map((genre, i) => {
                        return <option key={i} value={genre.id}>{genre.name}</option>
                    })}
                </select>
                <br />
                <br />
                <button>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    )
}
export default AddMovie;