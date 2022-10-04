import classes from "./Navbar.module.css";
import fossil from '../../Images/fossil.png';
import { Link } from "react-router-dom";



function Navbar(){
    return (
    <nav className={classes.nav_section}>
        <Link to="/">
            <img  className={classes.logo} src={fossil}></img>
        </Link>
        <h1></h1>
        <ul className={classes.tabs_list}>
            <li>
                <Link className={classes.tab} to="/history">
                    <p className={classes.ptag}>History</p>
                </Link>
            </li>
            <li className={classes.tab}>Biology</li>
            <li className={classes.tab}>Anatomy</li>
            <li className={classes.RefTab}>Resources</li>
        </ul>
    </nav>
    );
}

export default Navbar;