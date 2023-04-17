import { GET_DOGS, GET_DOG_RACE, GET_DOG, GET_TEMPERAMENTS, FILTER_TEMPS, FILTER_DB, SORT_NAME, SORT_WEIGHT } from "./actions";

const initialState = {
    allDogs:[],
    dogs: [],
    temps: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return { ...state, allDogs:action.payload, dogs: action.payload };
        case GET_DOG_RACE:
            return { ...state, dogs: action.payload };
        case GET_DOG:
            return { ...state, dogs: action.payload };
        case GET_TEMPERAMENTS:
            return {...state, temps:action.payload};
        case FILTER_TEMPS:
            const dogs=state.allDogs;
            const tempsFilter=action.payload==='all'? dogs : dogs.filter(dog=>dog.temperaments.includes(action.payload));
            return {...state, dogs:tempsFilter};
        case FILTER_DB:
            const allDogs=state.allDogs;
            const dbFilter=action.payload==='all'? allDogs: action.payload==='created'? allDogs.filter(dog=>dog.createdInDb): allDogs.filter(dog=>!dog.createdInDb);
            return {...state, dogs:dbFilter};
        case SORT_NAME:
            const sortedByName=action.payload==='Ascending'?
            state.dogs.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0;
            }) :
            state.dogs.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
            return {...state, dogs:sortedByName};   
        case SORT_WEIGHT:
            const sortedByWeight=action.payload==='Ascending'?
            state.dogs.sort(function(a,b){
                return parseInt(a.weightMin) - parseInt(b.weightMin);
            }) :
            state.dogs.sort(function(a,b){
                return parseInt(b.weightMax) - parseInt(a.weightMax);
            });
            return {...state, dogs:sortedByWeight};  
        default:
            return { ...state };
    }
};

export default rootReducer;