import { useHistory } from 'react-router-dom';

function AddMovie() {
    const history = useHistory();

    const handleSaveClick = () => {
        console.log('clicked')
        history.push('/');
    }

    const handleCancelClick = () => {
        console.log('clicked')
        history.push('/');
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Movie Title"
            />
            <input
                type="text"
                placeholder="Movie Title"
                placeholder="Movie Poster"
            />
            <textarea></textarea>

            {/* <label htmlFor="genres">Choose a genre:</label> */}

            <select name="cars" id="cars">
                <option value="adventure">Adventure</option>
                <option value="animated">Animated</option>
                <option value="biographical">Biographical</option>
                <option value="comedy">Comedy</option>
                <option value="diaster">Diaster</option>
                <option value="drama">Drama</option>
                <option value="epic">Epic</option>
                <option value="fantasy">Fantasy</option>
                <option value="musical">Musical</option>
                <option value="romantic">Romantic</option>
                <option value="scienceFiction">Science Fiction</option>
                <option value="spaceOpera">Space-Opera</option>
                <option value="superhero">Superhero</option>
            </select>
            <br />
            <br />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </div>
    )
}
export default AddMovie;