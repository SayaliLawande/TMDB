import {useEffect,useState,memo} from 'react';
import MovieCard from '../MovieCard';
import Pagination from '../Pagination';

import './Movies.css';

function Movies(/*{watchList, handleAddToWatchList, deleteFromWatchList}*/){
const [movies,setMovies] = useState([]);
const [pageNo,setPageNo] = useState(1);

    function handNext(){
        if(pageNo === 500) return;
        setPageNo(pageNo + 1);
    }

    function handlePrevious(){
        if(pageNo === 1) return;
        setPageNo(pageNo - 1);
    }

useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=1a8c2cc4bcef68bf542b11c3c3c7b610&page=${pageNo}`)
            .then((res) => res.json()) // Correctly return res.json()
            .then((data) => {
                console.log(data);
                setMovies(data.results); // Assuming 'results' contains the movies array
            })
            .catch((err) => console.error('Error fetching data:', err)); // Handle errors
    }, [pageNo]);

return(
    <>
    <h1>Trending Movies</h1>
    <div className='card-parent'>
    {
        movies.map((movie)=>{
            //return <MovieCard movie={movie} key={movie.id} watchList={watchList} handleAddToWatchList={handleAddToWatchList} deleteFromWatchList={deleteFromWatchList}/>
            return <MovieCard movie={movie} key={movie.id}/>
        })
    }
    </div>

    <Pagination
        nextPageFn = {handNext}
        previousPageFn = {handlePrevious}
        pageNumber = {pageNo}
    />
    </>
)

}

//memo --> will only rerender if there is a change to useState of movies.watchList
//only the place where change is happening, then only it should be rerender
export default memo(Movies);