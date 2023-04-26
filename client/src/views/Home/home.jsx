import { useEffect } from "react";
import CardContainer from "../../components/CardContainer/cardContainer";
import SearchBar from "../../components/SearchBar/searchBar";
import Filters from "../../components/Filters/filters";
import Sorting from "../../components/Sorting/sorting";
import style from "./home.module.css"
import { getDogs, getDog, getTemperaments} from "../../redux/actions";
import { useDispatch } from "react-redux";


const Home=()=>{
    const dispatch=useDispatch();

    const onSearch=(name)=>{
        dispatch(getDog(name));
    }
    
    useEffect(()=>{
        dispatch(getDogs());
        dispatch(getTemperaments());
    },[dispatch]);

    
    return (
        <div className={style.home}> 
            <p>Home View</p>
            <SearchBar onSearch={onSearch}/>
            <Filters/>
            <Sorting/>
            <CardContainer/>
        </div>
    )
};

export default Home;