import { useHistory } from 'react-router-dom';

function DisplayDetails(){
    const history = useHistory();

    const handleClick = () => {
        console.log('clicked')
        history.push('/');
    }

    return (
        <div>
            <button onClick={handleClick}>Back to List</button>
        </div>
    )
}
export default DisplayDetails;