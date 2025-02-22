//import MovieContext from '../../context/MovieContext';
import {useContext} from 'react';
import WatchListCard from '../WatchListCard';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './WatchList.css';

function WatchList(){

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    //let {watchList,setWatchList,handleAddToWatchList,deleteFromWatchList} = useContext(MovieContext);

    const watchList = useSelector(state => {
        return state.watchList;
    })

    function handleSearch(e){
        setSearch(e.target.value);
    }

    function handleAscendingSort(){

        //watchlist is passed by reference
        let sortedAsc = watchList.sort((movieObjA,movieObjB)=>{
            return movieObjA.vote_average - movieObjB.vote_average
        });

        dispatch({type: 'SET_WATCHLIST',payload:sortedAsc})
        //setWatchList(sortedAsc) --> this sortedAsc has same reference as watchlist and hence
        //no re-render is required. hence even when we get array we will not get it on screen.

        //here we are referencing a replica of watchlist using spreqd operator in new array
        //sortedAsc and since it is a new array the re-render will happen
        //setWatchList([...sortedAsc]);
    }

    function handleDescendingSort(){
        let sortedDesc = watchList.sort((movieObjA,movieObjB)=>{
                return movieObjB.vote_average - movieObjA.vote_average
        });
        dispatch({type: 'SET_WATCHLIST', payload: sortedDesc})
        //setWatchList([...sortedDesc]);
    }

    return (
        <div className="watchlist">
        <button onClick={handleAscendingSort} className="asc-btn">Asc Sort</button>
        <button onClick={handleDescendingSort} className="desc-btn">Desc Sort</button>

        <input onChange={handleSearch} value={search} className="search-input"/>
        {watchList.filter((item) => {
            return item.title.toLowerCase().includes(search.toLowerCase())
        }).map(function (item){
            return (<WatchListCard item={item} key={item.id}/>)
        })}
        </div>
    )
}

export default WatchList;

/*
This needed in watchlist -
search bar
genre specific filtering
sorting



*/