import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, Grid } from '@material-ui/core';
import './Details.css'

function DisplayDetails() {
    const history = useHistory();
    //Access url parameters 
    const params = useParams();
    const dispatch = useDispatch();

    //movie reducer
    const movie = useSelector((store) => store.movie);


    useEffect(() => {
        //fetch movie on page load
        dispatch({
            type: 'FETCH_MOVIE',
            payload: { id: params.id },
        });
    }, []);

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={movie.poster} alt={movie.title} />
                </Grid>
                <Grid item xs={8}>
                    <h3>{movie.title}</h3>

                    {movie.array_agg ? (
                        <ul>
                            {movie.array_agg.map((genre, index) => {
                                return <li key={index}>{genre}</li>;
                            })}
                        </ul>
                    ) : (
                        <ul>none</ul>
                    )}

                    <p>{movie.description}</p>
                </Grid>
            </Grid>
            <Button 
                variant="contained"
                color="secondary"
                className="detailBtn"
                onClick={() =>history.push('/')}
            >
                Back
            </Button>
        </Container>
    )
}
export default DisplayDetails;


