import { useDispatch, useSelector } from "react-redux";
import { filterByTemps, filterCreated, setPage } from "../../redux/actions";

export default function Filters(){
    const dispatch=useDispatch();
    const temps=useSelector(state=>state.temps);
    const handleChangeTemps=(e)=>{
        dispatch(filterByTemps(e.target.value));
        dispatch(setPage(1));
    }
    const handleChangeCreated=(e)=>{
        dispatch(filterCreated(e.target.value));
        dispatch(setPage(1));
    }
    return (
        <>
            <select onChange={handleChangeCreated}>
                <option value="All">All</option>
                <option value="Created">Created dogs</option>
                <option value="Existing">Real life dogs</option>
            </select>
            <select  onChange={handleChangeTemps}>
                <option value="All">All</option>
                {temps.map(temp=>{
                    return <option key={temp.id} value={temp.name}>{temp.name}</option>
                })}
            </select>
        </>
    )
}