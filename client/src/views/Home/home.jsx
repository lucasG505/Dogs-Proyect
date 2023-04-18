import CardContainer from "../../components/CardContainer/cardContainer";
import style from "./home.module.css"

const Home=()=>{
    return (
        <div className={style.home}> 
            <p>Home View</p>
            <CardContainer/>
        </div>
    )
};

export default Home;