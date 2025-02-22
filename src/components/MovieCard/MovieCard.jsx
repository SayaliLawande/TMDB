import './MovieCard.css'
import {Link} from 'react-router-dom';
import MovieContext from '../../context/MovieContext';
import {useDispatch, useSelector} from 'react-redux';
import {useContext} from 'react';

function MovieCard({movie/*,watchList, handleAddToWatchList, deleteFromWatchList*/}){

    const dispatch = useDispatch();

    const watchList = useSelector(state => {
        return state.watchList;
    })

    //let {watchList,handleAddToWatchList,deleteFromWatchList} = useContext(MovieContext);


    function doesContain(){

        if(watchList==null){
            return false;
        }

        for(let i=0;i<watchList.length;i++){
            if(watchList[i].id === movie.id){
                return true;
            }
        }

        return false;
    }

    function deleteIdFromWatchList(){
        //deleteFromWatchList(movie);
        dispatch({type:"REMOVE_FROM_WATCHLIST",payload:movie})
    }

    function handleIdAddToWatchList(){
        //handleAddToWatchList(movie);
        dispatch({type:"ADD_TO_WATCHLIST",payload:movie})
    }

    return (
        <div className="movie-card">
            <div className="movie-card-img">
                <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} alt={movie.title} />
            </div>
            <Link to={`/details/${movie.id}`} className="discover">i</Link>
            <div className="movie-card-title">{movie.title}</div>
            {/*<div>{movie.overview}</div>*/}

            {doesContain() ? (
              <button onClick={deleteIdFromWatchList} className="movie-remove-button">remove</button>
            ) : (
              <button onClick={handleIdAddToWatchList} className="movie-add-button">add</button>
            )}
        </div>
    )
}

export default MovieCard;

/*
1.Check if the movie is in watchlist
2. If movie is in watchlist then keep a cross button
3. Else a watch button

What if we want to eliminate arrow function - () => {handleAddToWatchList(movie)}

We can create a function addToWatchList
*/