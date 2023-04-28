import { useEffect } from "react";
import CardContainer from "../../components/CardContainer/cardContainer";
import SearchBar from "../../components/SearchBar/searchBar";
import Filters from "../../components/Filters/filters";
import Sorting from "../../components/Sorting/sorting";
import style from "./home.module.css"
import { getDogs, getDog, getTemperaments, setPage} from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";
import Pagination from "../../components/Pagination/paginationTry";



const Home=()=>{
    const dispatch=useDispatch();
    const filtered = useSelector(state => state.filtered);
    const dogs = useSelector(state => state.dogs);
    const filterDogsDB = useSelector(state => state.filterDogsDb);
    const filterDogsTemp = useSelector(state => state.filterDogsTemp);
    const page=useSelector(state => state.page);
    const notSelected=useSelector(state=>state.notSelected);

    const onSearch=(name)=>{
        dispatch(getDog(name));
    }
    
    useEffect(()=>{
        dispatch(getDogs());
        dispatch(getTemperaments());
    },[dispatch]);

	
	let filterDogs;
	if ((filtered.length === 0 && filterDogsDB.length === 0) && filterDogsTemp.length === 0 && notSelected) {
		filterDogs = dogs;
	} else {
		filterDogs = dogs.filter(dog => {
			return filtered.some(obj => JSON.stringify(obj) === JSON.stringify(dog));
		});
	}
	
	const handlePageChange = (page) => {
		dispatch(setPage(page));
	}

    return (
        <div className={style.home}> 
            <SearchBar onSearch={onSearch}/>
            <Filters/>
            <Sorting/>
            <Pagination totalRecords={filterDogs.length} onPageChanged={handlePageChange} currentPage={page} pageLimit={8} />
            <CardContainer/>
        </div>
    )
};

export default Home;