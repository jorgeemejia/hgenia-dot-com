import classes from "./Navbar.module.css";
import fossil from '../../Images/Navbar/greenfossil.png';
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
                    <p className={classes.ptag}>Origins</p>
                </Link>
            </li>
            <li>
            <Link className={classes.tab} to="/anatomy">
                    <p className={classes.ptag}>Anatomy</p>
            </Link>
            </li>
            <li>
            <Link className={classes.tab} to="/whereabouts">
                    <p className={classes.ptag}>Whereabouts</p>
            </Link>
            </li>
            <li>
            <Link className={classes.tab} to="/affinity">
                    <p className={classes.ptag}>Affinity</p>
            </Link>
            </li>
            <li>
            <Link className={classes.tab} to="/references">
                    <p className={classes.RefTab}>References</p>
            </Link>
            </li>
            {/* <li className={classes.RefTab}>Resources</li> */}
        </ul>
    </nav>
    );
}

export default Navbar;