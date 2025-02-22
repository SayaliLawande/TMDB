import {useDispatch} from 'react-redux';

function WatchListCard({item}) {

    const dispatch = useDispatch();

    function deleteIdFromWatchList(){
        dispatch({type: 'REMOVE_FROM_WATCHLIST',payload : item});
    }

    return(
        <div className="watchlistcard">
            <div className="watchlist-card-img">
                <img src={`https://image.tmdb.org/t/p/w780/${item.poster_path}`}/>
            </div>
            <div>
            {item.title}
            </div>
            <div>
            {item.vote_average}
            </div>
            <div className="watchlist-card-delete" onClick={deleteIdFromWatchList}>
                Delete
            </div>
        </div>
    )
}

export default WatchListCard;