import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DisplayDetails() {
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

    const movie = useSelector((store) => store.movie);


    useEffect(() => {
        //grab details about specific movie
        dispatch({
            type: 'FETCH_MOVIE',
            payload: { id: params.id },
        });
    }, []);

    return (
        <div>
            <img src={movie.poster} alt={movie.title} />

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

            <button onClick={() => history.push('/')}>Back</button>
        </div>
    )
}
export default DisplayDetails;


