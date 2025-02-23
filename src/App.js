import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MovieContext from './context/MovieContext';
import WatchListPage from './pages/WatchListPage';
import NavBar from './components/NavBar';

import {useEffect, useState} from 'react';
import {BrowserRouter,Route,Switch, Routes} from "react-router-dom";

function App() {

const [watchList, setWatchList] = useState(() => {
    try {
        const data = localStorage.getItem("movies");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return [];
    }
});

console.log("WATCHLIST");
console.log(watchList);

function handleAddToWatchList(movieObj){
    let updatedWatchlist = [...watchList,movieObj];
    setWatchList(updatedWatchlist);
    console.log(watchList);
    localStorage.setItem('movies', JSON.stringify(updatedWatchlist));
}

function deleteFromWatchList(movieObj){
    let filteredMovies = watchList.filter((movie) => {
        return movie.id !== movieObj.id
    });
    setWatchList(filteredMovies);
    localStorage.setItem('movies', JSON.stringify(filteredMovies));
}
  return (
    <div className="App">
    <BrowserRouter>
    <MovieContext.Provider value={{watchList,setWatchList,handleAddToWatchList,deleteFromWatchList}}>
    <NavBar></NavBar>
    <Routes>
    <Route
        path="/"
        exact={true}
        element={<HomePage/>}
    />
    <Route
        path="/details/:id"
        exact={true}
        element={<DetailsPage />}
    />
    <Route
            path="/watchlist"
            exact={true}
            element={<WatchListPage />}
        />
     <Route
            path="*"
            element={<NotFoundPage />}
        />
    </Routes>
    </MovieContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;

/*
Slide show
On click css
add-remove button
i - button css
asc - desc toggle
footer
*/