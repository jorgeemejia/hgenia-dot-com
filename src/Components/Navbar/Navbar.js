import classes from "./Navbar.module.css";
import fossil from '../../Images/fossil.png';



function Navbar(){
    return (
    <nav className={classes.nav_section}>
        <img src={fossil}></img>
        <h1></h1>
        <ul className={classes.tabs_list}>
            <li className={classes.tab}>History</li>
            <li className={classes.tab}>Biology</li>
            <li className={classes.tab}>Anatomy</li>
            <li className={classes.RefTab}>Resources</li>
        </ul>
    </nav>
    );
}

export default Navbar;