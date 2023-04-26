import { useDispatch, useSelector } from "react-redux";
import { filterByTemps, filterCreated, setPage } from "../../redux/actions";
import style from "./filters.module.css";

export default function Filters() {
    const dispatch = useDispatch();
    const temps = useSelector(state => state.temps);
    const handleChangeTemps = (e) => {
        dispatch(filterByTemps(e.target.value));
        dispatch(setPage(1));
    }
    const handleChangeCreated = (e) => {
        dispatch(filterCreated(e.target.value));
        dispatch(setPage(1));
    }
    return (
        <div className={style.wrap} >
            <div className={style.container} >
                <select onChange={handleChangeCreated} className={style.customSelect} >
                    <option disabled>Origin</option>
                    <option value="All">All</option>
                    <option value="Created">Created dogs</option>
                    <option value="Existing">Real life dogs</option>
                </select>
            </div>
            <div className={style.container}>
                <select onChange={handleChangeTemps} className={style.customSelect}>
                    <option disabled>Temperaments</option>
                    <option value="All">All</option>
                    {temps.map(temp => {
                        return <option key={temp.id} value={temp.name}>{temp.name}</option>
                    })}
                </select>
            </div>
        </div>
    )
}