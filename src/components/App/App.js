import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import DisplayDetails from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/home" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact>
          <DisplayDetails />
        </Route>

        {/* Add Movie page */}
        <Route path="/add-movie" exact>
          <AddMovie />
        </Route>

        
      </Router>
    </div>
  );
}


export default App;
