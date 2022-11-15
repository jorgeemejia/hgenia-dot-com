import classes from './History.module.css';
import brwn_fossil from '../Images/Origins/brwn_fossil.jpg';
import interpretations from '../Images/Origins/interpretations.png';
import canadia from '../Images/Origins/canadia.jpg';
import waterBG from '../Images/Origins/waterBG.jpg';

export default function History (){
    return(
        <div className={classes.history_page}>
            <div className={classes.hero_section}>
                <img className={classes.hero_image} src={waterBG}  alt="" />
                <h1 className={classes.header}>Origins</h1>
            </div>
            <div className={classes.info_section}>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Hallucigenia had a very interesting history of interpretations. 
                    At first, American Paleontologist <b>Charles Walcott</b> described the 
                    species as belonging to the polychaete worm <b>Canadia Spinosa</b>. 
                    In Charles’ defense, this assumption was reasonable as Canadia Spinosa 
                    was also found in the <b>Burgess Shale</b>. Furthermore, similarly to 
                    Hallucigenia’s many appendages, Canadia Spinosa also has a plethora of 
                    <b> notosetae</b> (fleshy protrusions).
                    {/* Hallucigenia had a very interesting history of interpretations. 
                    At first, American Paleontologist Charles Walcott described the 
                    species as belonging to the polychaete worm Canadia Spinosa. 
                    In Charles’ defense, this assumption was reasonable as Canadia Spinosa 
                    was also found in the Burgess Shale. Furthermore, similarly to 
                    Hallucigenia’s many appendages, Canadia Spinosa also has a plethora of 
                    notosetae (fleshy protrusions) */}

                    </p>
                </div>
                <img className={classes.image} src={canadia} alt="" />
            </div>
            <div className={classes.info_section}>
                <img className={classes.image} src={brwn_fossil} alt="" />
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    However, in 1977, English paleontologist <b>Simon Conway Morris</b> gave his 
                    own redescription of the organism. Conway imagined the animal <b>walking on 
                    its spines</b>, but since we know this isn’t true, what led Conway to this analysis? 
                    <br/><br/>
                    At the time, no such specimen of Hallucigenia had been found with <b>both rows of legs</b>. 
                    Therefore, to Conway, the only form of transportation possible were the animals' spines and 
                    thus it’s a single row of legs were thought to be <b>tentacles</b>. Furthermore, Conway believed 
                    the animal’s tentacles (legs) possessed a feeding tube.
                    <br/><br/>
                    Conway’s interpretation of this strange creature raised one large question, 
                    “How would the animal be able to move with such stiff legs?” Regardless of this flaw, 
                    Conway’s redescription was accepted as it was the best description at the time. 
                    </p>
                </div>
            </div>
            <div className={classes.info_section}>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Finally in 1991, <b>Lars Ramskold</b>, and <b>Hou Xuanguang</b> came up with the most accurate 
                    reimagining of Hallucigenia. In contrast to previous redescriptions, Lars and Hou had 
                    the advantage of working with <b>additional specimens</b> found in the lower Cambrian Matianshan 
                    shales of <b>China</b>. With these extra specimens, 
                    a pairing set of legs were found, leading to the following reinterpretation. 
                    <br/><br/>
                    They reinterpreted Hallucigenia as a <b>lobopodian</b> (worm with stubby feet), which were 
                    still thought to be exclusively related to velvet worms. The duo also decided to <b>invert</b> 
                    the creature interpreting the tentacles as legs and the spines as protectives. 
                    <br/><br/>
                    Lars and Hou also believed that the blob-like “head” was actually nothing but a 
                    stain that appears in many specimen, not a preserved portion of the anatomy.
                    </p>
                </div>
                <img className={classes.image} src={interpretations} alt="" />
            </div>
        </div>
    );
}