import './DetailsBanner.css';

function DetailsBanner({details}){
    return (
        <div className="details-banner">
            <div className="details-banner-img">
            <img src={`https://image.tmdb.org/t/p/w780/${details.poster_path}`}/>
            </div>
            {details.videos && <a href={`https://www.youtube.com/results?search_query=${details.videos.results[1].key}`} target="_blank">Watch here</a>}
        </div>
    )
}

export default DetailsBanner;