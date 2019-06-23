const INITIAL_STATE = {
  searchParam: [],
  imdbIdParam:{}
};

export default (state = INITIAL_STATE, action) => {
        switch (action.type) {       
        case 'SEARCH':
        {
          return {...state,searchParam:action.searchParam} 
        }          
        case 'IMDB':
        {
          return {...state,imdbIdParam:action.imdbIdParam} 
        }          
        default :
        return {...state};    
    }
  };