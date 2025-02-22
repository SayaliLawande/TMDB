import './Card.css';

function Card({item}){
    return(
        <div className="card">
            <div className="card-img">
                <img src={`https://image.tmdb.org/t/p/w780/${item.profile_path}`}/>
            </div>
            <div className="card-header">{item.name}</div>
            <div className="card-text">{item.character}</div>
        </div>
    )
}

export default Card;