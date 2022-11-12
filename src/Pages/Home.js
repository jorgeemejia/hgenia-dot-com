
import classes from './Home.module.css';
import waterBG from '../Images/Origins/waterBG.jpg';
import hg_gif from "../Images/Home/worm.0.gif";
import hg_model from "../Images/Home/hg_model.jpg";
import hg_game from "../Images/Home/hg_game.jpg";

export default function Home (){
    return(
        <div className={classes.home_page}>
            <div className={classes.hero_section}>
                <img className={classes.hero_image} src={waterBG} width="100%" height="556"/>
                <h1 className={classes.header}>Hallucigenia</h1>
            </div>
            <div className={classes.images}>
                <img className={classes.image} src={hg_model} width="600" height="417"/>
                <img className={classes.image} src={hg_gif} width="600" height="417"/>
                <img className={classes.image} src={hg_game} width="600" height="417"/>
            </div>

        </div>
    );
}