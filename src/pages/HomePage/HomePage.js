import Movies from '../../components/Movies/';
import Banner from '../../components/Banner/';

function HomePage({watchList, handleAddToWatchList, deleteFromWatchList}){
    return(<>
        <Banner/>
        <Movies/>
    </>)
}

export default HomePage;