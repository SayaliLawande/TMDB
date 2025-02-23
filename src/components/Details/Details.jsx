import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import Cast from '../Cast';
import DetailsBanner from '../DetailsBanner';
import './Details.css';

function Details(){

    let [details,setDetails] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        //fetch('https://api.themoviedb.org/3/movie/550?api_key=1a8c2cc4bcef68bf542b11c3c3c7b610').then((res)=> res.json())
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1a8c2cc4bcef68bf542b11c3c3c7b610&append_to_response=credits,videos`).then((res)=> res.json())
        .then((res) => {
            //console.log(res.credits.cast);
            setDetails(res);
        })
    },[]);

        //console.log(details.credits);
    return(
        <div>
            <DetailsBanner details={details}/>
            <h2>CAST</h2>
            {details.credits ? <Cast cast={details.credits.cast.slice(0,8)} /> : null}
        </div>
    )
}

export default Details;

/*
Components in this page
1.Banner
2.Cast
3.Crew
4.Card
5. Nav bar and footer
*/

/*
Banner for details page
1.Add background image of movie
2. We need title, genre and watch button
3. Click event for watch button which redirects us to youtube url
4. We need video id of yt video in query parameter
*/