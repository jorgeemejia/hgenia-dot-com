import classes from './Hero.module.css';
import hgenia from '../../Images/lrgHgenia.png';

export default function Hero() {
    return (
        <div className={classes.hero_section}>
            <img className={classes.pic} src={hgenia}></img>
        </div>

    );
}