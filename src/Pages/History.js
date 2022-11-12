import classes from './History.module.css';
import brwn_fossil from '../Images/Origins/brwn_fossil.jpg';
import interpretations from '../Images/Origins/interpretations.png';
import canadia from '../Images/Origins/canadia.jpg';
import waterBG from '../Images/Origins/waterBG.jpg';

export default function History (){
    return(
        <div className={classes.history_page}>
            <div className={classes.hero_section}>
                <img className={classes.hero_image} src={waterBG}  alt="" width="100%" height="556"/>
                <h1 className={classes.header}>Origins</h1>
            </div>
            <div className={classes.info_section}>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Hallucigenia had a very interesting history of interpretations. 
                    At first, American Paleontologist Charles Walcott described the 
                    species as belonging to the polychaete worm Canadia.
                    </p>
                </div>
                <img className={classes.image} src={canadia} alt="" width="800" height="556"/>
            </div>
            <div className={classes.info_section}>
                <img className={classes.image} src={brwn_fossil} alt="" width="800" height="544"/>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                        In 1977 English paleontologist Simon Conway Morris gave his redescription of the 
                    organism. No specimen was available that showed both rows of legs, and as such 
                    Conway Morris reconstructed the animal walking on its spines, 
                    with its single row of legs interpreted as tentacles on the animal's back.<br/><br/>
                        Only the forward tentacles could easily reach to the 'head', 
                    meaning that a mouth on the head would have to be fed by passing 
                    food along the line of tentacles. Conway Morris suggested that a hollow 
                    tube within each of the tentacles might be a mouth.<br/><br/>
                        This raised questions, such as how it would walk on the stiff legs, 
                    but it was accepted (with reservations) as the best available interpretation.
                    </p>
                </div>
            </div>
            <div className={classes.info_section}>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    In 1991, Lars Ramskold and Hou Xianguang, working with additional specimens of a 
                    "hallucigenid", Microdictyon, from the lower Cambrian Maotianshan shales of China, 
                    reinterpreted Hallucigenia as a lobopodian, a legged worm-like taxon which were 
                    still thought to be exclusively related to onychophoran (velvet worm) at that time.
                    <br/><br/>
                    They inverted it, interpreting the tentacles, which they believe to be paired, 
                    as walking structures and the spines as protective.
                    <br/><br/>
                    Further preparation of fossil specimens showed that the 'second legs' were buried 
                    at an angle to the plane along which the rock had split, and could be revealed by 
                    removing the overlying sediment
                    <br/><br/>
                    Ramskold and Hou also believe that the blob-like 'head' 
                    is actually a stain that appears in many specimens, not a preserved portion 
                    of the anatomy.
                    </p>
                </div>
                <img className={classes.image} src={interpretations} alt="" width="800" height="556"/>
            </div>
        </div>
    );
}