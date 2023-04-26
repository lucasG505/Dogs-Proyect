import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const NavBar = () => {
    return (
        <nav className={style.navMenu}>
            <Link to="/home">Home</Link>
            <Link to="/create">Create</Link>
            <div className={style.dot}></div>
        </nav>
    )
};

export default NavBar;