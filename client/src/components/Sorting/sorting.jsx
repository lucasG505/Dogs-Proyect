import { useDispatch } from "react-redux";
import { setPage, sortByName, sortByWeight } from "../../redux/actions";

export default function Sorting(){
    const dispatch=useDispatch();
    const handleNameSort=(e)=>{
        dispatch(sortByName(e.target.value));
        dispatch(setPage(1));
    }
    const handleWeightSort=(e)=>{
        dispatch(sortByWeight(e.target.value));
        dispatch(setPage(1));
    }

    return (
        <div>
            <label htmlFor="">Names</label>
            <select onChange={handleNameSort}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
            <label htmlFor="">Weights</label>
            <select onChange={handleWeightSort}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
        </div>
    )
}