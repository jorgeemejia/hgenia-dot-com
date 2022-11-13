
import classes from './Home.module.css';
import waterBG from '../Images/Origins/waterBG.jpg';
import hg_gif from "../Images/Home/worm.0.gif";
import hg_model from "../Images/Home/hg_model.jpg";
import hg_game from "../Images/Home/hg_game.jpg";

export default function Home (){
    return(
        <div className={classes.home_page}>
            <div className={classes.hero_section}>
                <img className={classes.hero_image} src={waterBG}  alt=""/>
                <h1 className={classes.header}>Hallucigenia</h1>
            </div>
            <div className={classes.images}>
                <img className={classes.image} src={hg_model} alt=""/>
                <img className={classes.image} src={hg_gif}  alt=""/>
                <img className={classes.image} src={hg_game}  alt=""/>
            </div>

        </div>
    );
}