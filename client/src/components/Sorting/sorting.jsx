import { useDispatch } from "react-redux";
import { setPage, sortByName, sortByWeight } from "../../redux/actions";
import style from "./sorting.module.css";

export default function Sorting() {
    const dispatch = useDispatch();
    const handleNameSort = (e) => {
        dispatch(sortByName(e.target.value));
        dispatch(setPage(1));
    }
    const handleWeightSort = (e) => {
        dispatch(sortByWeight(e.target.value));
        dispatch(setPage(1));
    }

    return (
        <div className={style.wrap}>
            <div className={style.container} >
                <label htmlFor="" className={style.label} >Names:</label>
                <select onChange={handleNameSort} className={style.customSelect} >
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
            <div className={style.container} >
                <label htmlFor="" className={style.label} >Weights:</label>
                <select onChange={handleWeightSort} className={style.customSelect} >
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
        </div>
    )
}