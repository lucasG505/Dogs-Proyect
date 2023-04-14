import { Link } from "react-router-dom";
import style from "./landing.module.css";
const Landing = () => {
    return (
        <div className={style.landing}>
            <p id={style.tittle}>Welcome</p>
            <p>Find your ideal dog!</p>
            <Link to="/home">Find Now</Link>
        </div>
    )
};

export default Landing;