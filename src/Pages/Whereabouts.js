import classes from './Whereabouts.module.css';
import burgess_shale from '../Images/Whereabouts/burgess_shale.png';
import china from '../Images/Whereabouts/china.jpg';

export default function Whereabouts (){
    return(
        <div className={classes.whereabouts_page}>
        <div className={classes.info_section}>
            <div className={classes.text_box}>
                <p className={classes.text}>
                Hallucigenia was first described from the Burgess Shale in 
                southeastern British Columbia, Canada. 109 specimens of Hallucigenia 
                are known from the Greater Phyllopod bed, where they comprise 0.3% of 
                the community.
                </p>
            </div>
            <img className={classes.image} src={burgess_shale} width="800" height="556"/>
        </div>
        <div className={classes.info_section}>
            <div className={classes.text_box}>
                <p className={classes.text}>
                Hallucigenia also forms a minor component of Chinese lagerstätten. 
                Isolated hallucigeniid spines, however, are widely distributed in a 
                range of Cambrian deposits, preserved both as carbonaceous and 
                mineralized fossils.
                </p>
            </div>
            <img className={classes.image} src={china} width="800" height="556"/>
        </div>
    </div>
    );
}