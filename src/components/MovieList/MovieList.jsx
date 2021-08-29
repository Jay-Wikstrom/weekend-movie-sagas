import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import { Container, Grid, Card, Button, makeStyles } from '@material-ui/core';


function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        //fetch movies on page load
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = () => {
        //move user to the add-movie page
        history.push('/add-movie');
    };

    //Add padding and margin to Add Movie button
    const useStyles = makeStyles({
        field: {
            padding: 25,
            margin: 25,
        }
    })
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <h1>Movies</h1>
            <Grid container spacing={2}>
                {movies.map(movie => {
                    return (
                        <Grid item xs={4} key={movie.id}>
                            <Card>
                                <h3>{movie.title}</h3>
                                
                                <img 
                                    src={movie.poster}
                                    alt={movie.title}
                                    onClick={() => history.push(`/details/${movie.id}`)}
                                />
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            <Button 
                className={classes.field}
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Add Movie
            </Button>
        </Container>

    );
}

export default MovieList;