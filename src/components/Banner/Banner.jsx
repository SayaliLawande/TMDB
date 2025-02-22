import {useEffect,useState} from 'react';
import './Banner.css';

function Banner(){

//Get all films
//const [films,setFilms] = useState([]);
//To get single film for banner from all the films
const [film,setFilm] = useState([]);

    //1. Fetch the data
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=1a8c2cc4bcef68bf542b11c3c3c7b610')
        .then((res)=> res.json())
            .then((res) => {
            //setFilms is asynchronous in nature, hence it wont provide with proper output hence we use res.results in setFilm. But setFilms is only to explain async nature of react
            //setFilms(res.results);
            let id = Math.floor(Math.random() *20 );
            setFilm(res.results[id]);
            console.log(res.results[id]);
        })
    },[]);

    //2. Pick a random movie
    return(
        <div className="banner">
            <div className="banner-img">
            <img src={`https://image.tmdb.org/t/p/w780/${film.backdrop_path}`} alt={film.title} />
            </div>
            <div className="banner-title">
            {film.title}
            </div>
        </div>

    )
}

export default Banner;

/*
1. fetch the data
2. Randomly pick the movie
3. Display full size image
4. Display text on top of the image
5.
*/