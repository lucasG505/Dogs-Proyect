import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { getDogByRace, cleanDetail } from "../../redux/actions";
import style from "./detail.module.css";

const Detail = () => {
    const dispatch = useDispatch();

    const detail = useSelector(state => state.detail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDogByRace(id));
        return () => {
            dispatch(cleanDetail());
        }
    }, [dispatch, id]);
    if (isNaN(id)) {
        let temps = detail.temperaments;
        temps = temps?.map(t => t.name).join();
        console.log();
        return (
            <div className={style.container}>
                <div className={style.detail} >
                    <h3 id={style.created} >Id: {detail.id}</h3>
                    <img src={detail.image} alt="Fail" />
                    <div className={style.info} >
                        <p id={style.name} >Name: {detail.name}</p>
                        <p id={style.height}>Height:{detail.heightMin} - {detail.heightMax}</p>
                        <p id={style.weight} >Weight: {detail.weightMin} - {detail.weightMax}</p>
                        <p id={style.temperaments} >Temperaments: {temps}</p>
                        <p id={style.lifespan} >Life Span: {detail.lifeSpan}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={style.container}>
                <div className={style.detail}>
                    <h3>Id:{detail.id}</h3>
                    <img src={detail.image} alt="Fail" />
                    <div className={style.info} >
                        <p id={style.name} >Name: {detail.name}</p>
                        <p id={style.height} >Height: {detail.height}cm</p>
                        <p id={style.weight} >Weight: {detail.weight}kg</p>
                        <p id={style.temperaments} >Temperaments: {detail.temperaments}</p>
                        <p id={style.lifespan} >Life Span: {detail.lifespan}</p>
                    </div>
                </div>
            </div>
        )
    }

};

export default Detail;