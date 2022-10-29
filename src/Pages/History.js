import classes from './History.module.css';
import fossil from '../Images/hgfossil.jpg';

export default function History (){
    return(
        <div className={classes.history_page}>
            <div className={classes.info_section}>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <img className={classes.image} src={fossil} width="500" height="500"/>
            </div>
            <div className={classes.info_section}>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <img className={classes.image} src={fossil} width="500" height="500"/>
            </div>
        </div>
    );
}