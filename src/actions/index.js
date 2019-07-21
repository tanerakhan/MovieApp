import {API_BASE,API_KEY,SEARCH,IMDB} from '../config/env'
let axios = require('axios');
export let searchResult = (searchParam) => {
    return {
        type:'SEARCH',
        searchParam
    }
}
export let imdbIdResult = (imdbIdParam) => {
    return {
        type:'IMDB',
        imdbIdParam
    }
}
export const search = (query,page) => {
     
    let searchUrl = `${API_BASE}${SEARCH}${query}&apikey=${API_KEY}&page=${page}`;
    return (dispatch) => {
         axios.get(searchUrl).then((res) => {
              debugger
                let searchData = res.data;
                dispatch(searchResult(searchData))
                        },
            (err) => {
                console.log(err);
            }
        )
    }
}
export const imdbId = (id) => {
     
    let imdbIdUrl = `${API_BASE}${IMDB}${id}&apikey=${API_KEY}`;
    return (dispatch) => {
         axios.get(imdbIdUrl).then((res) => {
              
                let imdbIdData = res.data;
                dispatch(imdbIdResult(imdbIdData))
                        },
            (err) => {
                console.log(err);
            }
        )
    }
}
