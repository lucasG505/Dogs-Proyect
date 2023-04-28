import style from "./card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
    if (props.createdInDb) {
        let temps = props.temperaments.map(temp => temp.name);
        temps = temps.join();
        return (
            <div className={style.card}>
                <img src={props.image} alt="Fail" />
                <div className={style.cardContent} >
                    <Link to={`/detail/${props.id}`} >
                        <h2>{props.name}</h2>
                    </Link>
                    <p>Weight:{`${props.weightMin} - ${props.weightMax}`}. Temperaments: {temps}</p>
                </div>
            </div>
        )
    } else {
        return (

            <div className={style.card}>
                <img src={props.image} alt="Fail" />
                <div className={style.cardContent}>
                    <Link to={`/detail/${props.id}`} >
                        <h2>{props.name}</h2>
                    </Link>

                    <p>Weight: {props.weight}. Temperaments: {props.temperaments}  </p>
                </div>
            </div>

        )
    }
};

export default Card;