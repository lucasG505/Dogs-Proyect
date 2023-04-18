import { Link } from "react-router-dom";
import style from "./landing.module.css";
const Landing = () => {
    return (
        <div className={style.landing}>
            <div id={style.tittle}>
                <h1>Welcome to DOGS-PEDIA!</h1>
                <h2>Find the ideal dog for your needs within minutes or let your imagination fly by creating your own perfect dog</h2>
            </div>
            <Link to="/home"><button className={style.btnLanding}><span>Find Now!</span></button></Link>
        </div>
    )
};

export default Landing;