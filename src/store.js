/*reducer is a function*/
//(globalstate,action)

import {createStore} from "redux";

let watchList = () => { try { return JSON.parse(localStorage.getItem('movies')) ?? []; } catch (error) { console.error("Error parsing movies from localStorage:", error); return []; } };

function watchlistReducer(state = {watchList: watchList()} ,action){

    if (typeof state.watchList === 'undefined' || state.watchList === null){
        state.watchList = [];
    }
    switch (action.type){
        case 'SET_WATCHLIST' : {
            return {...state,watchList: [...action.payload]}
        }

        case 'ADD_TO_WATCHLIST': {
            //return the state
            console.log(state);
            let newState = {...state,watchList: [...state.watchList, action.payload]};
            localStorage.setItem('movies',JSON.stringify(newState.watchList));

            return newState;
        }

        case 'REMOVE_FROM_WATCHLIST': {
            //return the state

            const filteredMovies = state.watchList.filter(movie => movie.id !== action.payload.id);
            localStorage.setItem('movies',JSON.stringify(filteredMovies));
            let newState = {...state,watchList:[...filteredMovies]};
            return newState;
        }

        default:
            return state;
    }
}

const store = createStore(watchlistReducer);

export default store;