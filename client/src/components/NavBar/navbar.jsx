import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/create">Create</Link>
        </>
    )
};

export default NavBar;