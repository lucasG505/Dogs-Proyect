import { GET_DOGS, GET_DOG_RACE, GET_DOG, GET_TEMPERAMENTS, FILTER_TEMPS, FILTER_DB, SORT_NAME, SORT_WEIGHT, CLEAN_DETAIL, SET_PAGE } from "./actions";

const initialState = {
    allDogs: [],
    dogs: [],
    temps: [],
    filterDogsDb: [],
    filterDogsTemp: [],
    filtered: [],
    detail: [],
    page: 1
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return { ...state, allDogs: action.payload, dogs: action.payload };
        case GET_DOG_RACE:
            return { ...state, detail: action.payload };
        case GET_DOG:
            return { ...state, dogs: action.payload };
        case GET_TEMPERAMENTS:
            return { ...state, temps: action.payload };
        case FILTER_TEMPS:
            if (state.filtered.length === 0) {
                const tempsFilter = action.payload === 'All' ? state.allDogs : state.allDogs.filter((dog) => dog.createdInDb===undefined? dog.temperaments?.includes(action.payload) : (dog.temperaments.map(t=>t.name).join()).includes(action.payload));
                return { ...state, filterDogsTemp: tempsFilter, filtered: tempsFilter };
            } else {
                if (state.filterDogsDb.length === 0) {
                    const filter = action.payload === 'All' ? state.allDogs : state.allDogs.filter((dog) => dog.createdInDb===undefined? dog.temperaments?.includes(action.payload) : (dog.temperaments.map(t=>t.name).join()).includes(action.payload));
                    return { ...state, filtered: filter, filterDogsTemp: filter };
                }
                const filterTemps = action.payload === 'All' ? state.allDogs : state.allDogs.filter((dog) => dog.createdInDb===undefined? dog.temperaments?.includes(action.payload) : (dog.temperaments.map(t=>t.name).join()).includes(action.payload));
                const filter = action.payload === 'All' ? state.filterDogsDb : state.filterDogsDb.filter((dog) => dog.createdInDb===undefined? dog.temperaments?.includes(action.payload) : (dog.temperaments.map(t=>t.name).join()).includes(action.payload));
                return { ...state, filtered: filter, filterDogsTemp: filterTemps };
            }
        case FILTER_DB:
            if (state.filterDogsTemp.length === 0) {
                const dbFilter = action.payload === 'All' ? state.allDogs : action.payload === 'Created' ? state.allDogs.filter(dog => dog.createdInDb) : state.allDogs.filter(dog => !dog.createdInDb);
                return { ...state, filterDogsDb: dbFilter, filtered: dbFilter };
            } else {
                if (state.filtered.length === 0) {
                    const filter = action.payload === 'All' ? state.filterDogsTemp : action.payload === 'Created' ? state.filterDogsTemp.filter(dog => dog.createdInDb) : state.filterDogsTemp.filter(dog => !dog.createdInDb);
                    return { ...state, filtered: filter, filterDogsDb: filter };
                }
                const filterDb = action.payload === 'All' ? state.allDogs : action.payload === 'Created' ? state.allDogs.filter(dog => dog.createdInDb) : state.allDogs.filter(dog => !dog.createdInDb);
                const filter = action.payload === 'All' ? state.allDogs : action.payload === 'Created' ? state.filterDogsTemp.filter(dog => dog.createdInDb) : state.filterDogsTemp.filter(dog => !dog.createdInDb);
                return { ...state, filtered: filter, filterDogsDb: filterDb };
            }
        case SORT_NAME:
            const sortedByName = action.payload;
            let sorted = [];
            if (sortedByName === 'Ascending') {
                if (state.filtered.length) {
                    sorted = [...state.filtered];

                    sorted.sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        return 0;
                    })

                    return { ...state, filtered: sorted, dogs:sorted };
                } else {

                    sorted = [...state.dogs];
                    sorted.sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        return 0;
                    })

                    return { ...state, dogs: sorted };
                }
            } else {
                if (state.filtered.length) {
                    sorted = [...state.filtered];

                    sorted.sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                        return 0;
                    })

                    return { ...state, filtered: sorted, dogs:sorted };
                } else {

                    sorted = [...state.dogs];
                    sorted.sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                        return 0;
                    });

                    return { ...state, dogs: sorted };
                }

            }
        case SORT_WEIGHT:
            const sortedByWeight = action.payload;
            let sortedWeight = [];
            if (sortedByWeight === 'Ascending') {
                if (state.filtered.length) {
                    sortedWeight = [...state.filtered];
                    sortedWeight.sort(function (a, b) {
                        if (a.createdInDb) {
                            if (b.createdInDb) {
                                return (Number(a.weightMin)-Number(b.weightMin));
                            } else {
                                let weightsB = b.weight.split('-');
                                weightsB = weightsB.map(w => w.trim());
                                return(Number(a.weightMin)-Number(weightsB[0]));
                            }
                        } else {
                            if (b.createdInDb) {
                                let weightsA = a.weight.split('-');
                                weightsA = weightsA.map(w => w.trim());
                                return(Number(weightsA[0]) - Number(b.weightMin));
                            } else {
                                let weightsA = a.weight.split('-');
                                weightsA = weightsA.map(w => w.trim());
                                let weightsB = b.weight.split('-');
                                weightsB = weightsB.map(w => w.trim());
                                return (Number(weightsA[0]) - Number(weightsB[0]));
                            }
                        }
                    })
                    console.log(sortedWeight);
                    return { ...state, filtered: sortedWeight, dogs:sortedWeight };
                } else {
                    sortedWeight = [...state.allDogs];
                    sortedWeight.sort(function (a, b) {
                        if (a.createdInDb) {
                            if (b.createdInDb) {
                                return(Number(a.weightMin) - Number(b.weightMin));
                            } else {
                                let weightsB = b.weight.split('-');
                                weightsB = weightsB.map(w => w.trim());
                                return (Number(a.weightMin) - Number(weightsB[0]));
                            }
                        } else {
                            if (b.createdInDb) {
                                let weightsA = a.weight.split('-');
                                weightsA = weightsA.map(w => w.trim());
                                return (Number(weightsA[0]) - Number(b.weightMin));
                            } else {
                                let weightsA = a.weight.split('-');
                                weightsA = weightsA.map(w => w.trim());
                                let weightsB = b.weight.split('-');
                                weightsB = weightsB.map(w => w.trim());
                                return (Number(weightsA[0]) - Number(weightsB[0]));
                            }
                        }
                    })
                    console.log(sortedWeight);
                    return { ...state, dogs: sortedWeight };
                }
            } else {
                if (state.filtered.length) {
                    sortedWeight = [...state.filtered];
                    sortedWeight.sort(function (a, b) {
                        if (a.createdInDb) {
                            if (b.createdInDb) {
                                return (Number(b.weightMax) - Number(a.weightMax));
                            } else {
                                let weightsB = b.weight.split('-');
                                weightsB = weightsB.map(w => w.trim());
                                return (Number(weightsB[1]) - Number(a.weightMax));
                            }
                        } else {
                            if (b.createdInDb) {
                                let weightsA = a.weight.split('-');
                                weightsA = weightsA.map(w => w.trim());
                                return (Number(b.weightMax) - Number(weightsA[1]));
                            } else {
                                let weightsA = a.weight.split('-');
                                weightsA = weightsA.map(w => w.trim());
                                let weightsB = b.weight.split('-');
                                weightsB = weightsB.map(w => w.trim());
                                return (Number(weightsB[1]) - Number(weightsA[1]));
                            }
                        }
                    })
                    console.log(sortedWeight);
                    return { ...state, filtered: sortedWeight, dogs:sortedWeight };
                } else {
                    sortedWeight = [...state.allDogs];
                    sortedWeight.sort(function (a, b) {
                        if (a.createdInDb) {
                            if (b.createdInDb) {
                                return (Number(b.weightMax) - Number(a.weightMax));
                            } else {
                                let weightsB = b.weight.split('-');
                                weightsB = weightsB.map(w => w.trim());
                                return (Number(weightsB[1]) - Number(a.weightMax));
                            }
                        } else {
                            if (b.createdInDb) {
                                let weightsA = a.weight.split('-');
                                weightsA = weightsA.map(w => w.trim());
                                return (Number(b.weightMax) - Number(weightsA[1]));
                            } else {
                                let weightsA = a.weight.split('-');
                                weightsA = weightsA.map(w => w.trim());
                                let weightsB = b.weight.split('-');
                                weightsB = weightsB.map(w => w.trim());
                                return (Number(weightsB[1]) - Number(weightsA[1]));
                            }
                        }
                    });
                    console.log(sortedWeight);
                    return { ...state, dogs: sortedWeight };
                }

            }
        case CLEAN_DETAIL:
            return { ...state, detail: {} };
        case SET_PAGE:
            return {...state, page:action.payload};    
        default:
            return { ...state };
    }
};

export default rootReducer;