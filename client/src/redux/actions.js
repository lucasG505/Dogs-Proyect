import axios from "axios";
export const GET_DOGS="GET_DOGS";
export const GET_DOG="GET_DOG";
export const GET_DOG_RACE="GET_DOG_RACE";
export const CREATE_DOG="CREATE_DOG";
export const GET_TEMPERAMENTS="GET_TEMPERRAMENTS";
export const FILTER_TEMPS="FILTER_TEMPS";
export const FILTER_DB="FILTER_DB";
export const SORT_NAME="SORT_NAME";
export const SORT_WEIGHT="SORT_WEIGHT";
export const CLEAN_DETAIL="CLEAN_DETEAIL";
export const SET_PAGE="SET_PAGE";


export const getDogs= ()=> {
    return async function(dispatch){
        const dogs= (await axios.get("http://localhost:3001/dogs")).data;
        
        dispatch({type:GET_DOGS, payload:dogs});
    }
};

export const getDog = (name)=>{
    return async function (dispatch){
        const dog = (await axios.get(`http://localhost:3001/dogs?name=${name}`)).data;    
        dispatch({type:GET_DOG, payload:dog});
    }
};

export const getDogByRace = (id)=>{
    return async function (dispatch){
        
        const dog = (await axios.get(`http://localhost:3001/dogs/${id}`)).data[0];
        
        dispatch({type:GET_DOG_RACE,payload:dog});
    }
};

export const createDog = (body)=>{
    return async function (){
        const response=await axios.post(`http://localhost:3001/dogs`, body);
        return response;
    }
};

export const getTemperaments = ()=>{
    return async function(dispatch){
        let temps=(await axios.get(`http://localhost:3001/temperaments`)).data;
        temps=temps.sort(function (a,b){
            if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase()>b.name.toLowerCase()) return 1;
            return 0;
        })
        dispatch({type:GET_TEMPERAMENTS,payload:temps});
    }
};


export const filterByTemps=(payload)=>{
    return {
        type:FILTER_TEMPS,
        payload
    }
};

export const filterCreated =(payload)=>{
    return {
        type:FILTER_DB,
        payload
    }
};

export const sortByName =(payload)=>{
    return {
        type:SORT_NAME,
        payload
    }
};

export const sortByWeight =(payload)=>{
    return {
        type:SORT_WEIGHT,
        payload
    }
};

export const cleanDetail =()=>{
    return {
        type:CLEAN_DETAIL,
    }
};

export const setPage=(payload)=>{
    return {
        type:SET_PAGE,
        payload
    }
}