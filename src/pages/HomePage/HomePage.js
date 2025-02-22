import Movies from '../../components/Movies/';
import Banner from '../../components/Banner/';

function HomePage({watchList, handleAddToWatchList, deleteFromWatchList}){
    return(<>
        <Banner/>
        //<Movies watchList={watchList} handleAddToWatchList={handleAddToWatchList} deleteFromWatchList={deleteFromWatchList}/>
        <Movies/>
    </>)
}

export default HomePage;