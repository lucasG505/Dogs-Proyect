import style from "./card.module.css";

const Card = (props)=>{
    return(
        <div className={style.card}>
            <p>{props.name}</p>
            <p>{props.lifespan}</p>
        </div>
    )
};

export default Card;