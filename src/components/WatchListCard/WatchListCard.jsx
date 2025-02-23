import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './WatchListCard.css';

function WatchListCard({item}) {

    const dispatch = useDispatch();

    function deleteIdFromWatchList(){
        dispatch({type: 'REMOVE_FROM_WATCHLIST',payload : item});
    }

    return(
        <div className="watchlist-card">
            <div className="watchlist-card-img">
                <img src={`https://image.tmdb.org/t/p/w780/${item.poster_path}`}/>
            </div>
            <div className="watchlist-card-title">
            <Link to={`/details/${item.id}`} className="watchlist-card-title-link">{item.title}</Link>
            </div>
            <div className="watchlist-card-rating">
                Ratings: {item.vote_average}
            </div>
            <div className="watchlist-card-delete" onClick={deleteIdFromWatchList}>
                Delete
            </div>
        </div>
    )
}

export default WatchListCard;