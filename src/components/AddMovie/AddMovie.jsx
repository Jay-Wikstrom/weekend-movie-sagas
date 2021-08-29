import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import './AddMovie.css';

import {TextField, Container, Select, Button, Grid, InputLabel, FormControl, makeStyles} from '@material-ui/core';


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

    const useStyles = makeStyles({
        saveBtn: {
            paddingLeft: 40
        },
        cancelBtn: {
            paddingRight: 35
        }
    })
    const classes = useStyles()

    return (
        <Container>
            <form onSubmit={handleSaveClick}>
            <Grid>
                <Grid>
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                />
                </Grid>
                <Grid>
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Poster Image"
                        onChange={(e) => setPoster(e.target.value)}
                        value={poster}
                        required
                />
                </Grid>
                <Grid>
                    <TextField
                        label="Description"
                        variant="outlined"
                        rows={4}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                />
                </Grid>
                <Grid>
                    <FormControl variant="outlined" className="formInput">
                    <InputLabel id="pickGenre">Pick a Genre</InputLabel>
                    <Select 
                        name="genre"
                        label="pickGenre"
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        {genres.map((genre, i) => {
                            return <option key={i} value={genre.id}>{genre.name}</option>
                        })}
                    </Select>
                    </FormControl>
                </Grid>
                <Grid>
                    <Button 
                        variant="contained"
                        color="primary"
                        className={classes.saveBtn}
                    >
                        Save
                    </Button>
                    <Button 
                        variant="contained"
                        color="secondary"
                        className={classes.cancelBtn}
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Container>
    )
}
export default AddMovie;