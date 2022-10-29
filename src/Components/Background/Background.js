import classes from './Background.module.css';
import hgenia from '../../Images/hgeniaBG.png';



export default function Background () {
    return (
        <div className={classes.background_section}>
            <img className={classes.background_image}src={ hgenia }/>
            <div className={classes.image_box}></div>
        </div>
    );
}