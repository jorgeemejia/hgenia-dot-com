import classes from './Affinity.module.css';
import hgfossil from '../Images/Affinity/hgfossil.jpg';
import lineage from '../Images/Affinity/lineage.png';

export default function Affinity (){
    return(
        <div className={classes.anatomy_page}>
            <div className={classes.info_section}>
                <img className={classes.image} src={hgfossil} width="800" height="556"/>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Since the revisions around 1990s,Hallucigenia is 
                    unquestionably a lobopodian panarthropod, although the relationship 
                    with other panarthropods remain controversial. Hallucigenia has long 
                    been interpreted as a stem-group onychophoran (velvet worms) – a 
                    position that has found support from multiple phylogenetic analysis.
                    A key character demonstrating this affinity is the 
                    cone-in-cone construction of Hallucigenia claws, a feature shared 
                    only with modern onychophorans.
                    </p>
                </div>
            </div>
            <div className={classes.info_section}>
                <img className={classes.image} src={lineage} width="800" height="556"/>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    On the other hand, some analysis rather support the position of Hallucigenia as a 
                    basal panarthropod outside of onychophoran stem-group.
                    Under this scenario, the cone-in-cone structure shared between 
                    Hallucigenia and onychophorans represent panarthropod plesiomorphy.
                    Hallucigenia also exhibits certain characters inherited 
                    from the ancestral ecdysozoan, but lost in the modern onychophorans 
                    – in particular its distinctive foregut armature.
                    </p>
                </div>
            </div>
        </div>
    );
}