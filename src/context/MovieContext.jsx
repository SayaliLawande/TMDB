import React from 'react';
//import {createContext} from 'react';

const MovieContext = React.createContext({
    watchlist: [],
    setWatchList: () => {},
    handleAddToWatchList: () => {},
    deleteFromWatchList: () => {}

});
//export const MovieContext = createContext();

export default MovieContext;