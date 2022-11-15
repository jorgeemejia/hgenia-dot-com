import classes from './Affinity.module.css';
import lineage from '../Images/Affinity/lineage.png';
import velvet_worm from '../Images/Affinity/velvet_worm.jpg';
import waterBG from '../Images/Origins/waterBG.jpg';

export default function Affinity (){
    return(
        <div className={classes.affinity_page}>
            <div className={classes.hero_section}>
                <img className={classes.hero_image} src={waterBG} alt=""/>
                <h1 className={classes.header}>Affinity</h1>
            </div>
            <div className={classes.info_section}>
                <img className={classes.image} src={velvet_worm} alt=""/>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Since the revisions around the 1990s, Hallucigenia is unquestionably a <b>lobopodian 
                    panarthropod </b> (marine-legged worm). Nonetheless, its relationship with other 
                    panarthropods (organisms with segmented bodies and appendages) remains <b>controversial</b>. 
                    Hallucigenia has long been interpreted as a <b>stem group to velvet worms</b> and this is due 
                    to its claws. Similar to the claws of velvet worms, the structure of Hallucigenia’s 
                    claws are <b>cone-in-cone</b>. 
                    </p>
                </div>
            </div>
            <div className={classes.info_section}>
                <img className={classes.image} src={lineage} alt=""/>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    The controversy in Hallucigenia’s relationship with other panarthropods 
                    (organisms with segmented bodies and appendages) stems from the idea that 
                    Hallucigenia might actually be a <b>basal panarthropod</b>. Under this accusation, that cone-in-cone 
                    structure shared between Hallucigenia and velvet worms could simply be an example of 
                    <b>plesiomorphy</b>, an evolutionary trait that is homologous within a particular group of 
                    organisms but is not unique to members of that group.
                    </p>
                </div>
            </div>
        </div>
    );
}