import MovieLogo from '../../Assets/movielogo.png'
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return(
        <div className="nav-bar">
            <Link to="/"><img src={MovieLogo} className="logo-img"/></Link>
            <Link to="/" className="nav-bar-item">Movies</Link>
            <Link to="/watchlist" className="nav-bar-item">WatchList</Link>
        </div>
    )
}

export default NavBar