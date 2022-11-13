import classes from './Anatomy.module.css';
import hgenia_diagram from '../Images/Anatomy/hgenia_diagram.png';
import hgenia from '../Images/Anatomy/3d_hgenia.jpg';
import waterBG from '../Images/Origins/waterBG.jpg';

export default function Anatomy (){
    return(
        <div className={classes.anatomy_page}>
            <div className={classes.hero_section}>
                <img className={classes.hero_image} src={waterBG} alt=""/>
                <h1 className={classes.header}>Anatomy</h1>
            </div>
            <div className={classes.info_section}>
                <img className={classes.image} src={hgenia_diagram} alt=""/>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Hallucigenia is a 0.5–5.5 cm (3⁄16–2+3⁄16 in) long tubular animal with up to ten 
                    pairs of slender legs (lobopods). The first 2 or 3 leg pairs are slender and 
                    featureless, while the remaining 7 or 8 pairs each terminate with 1 or 2 claws. 
                    Above the trunk region are 7 pairs of rigid conical sclerites (spines) 
                    corresponding to the 3rd–9th leg pairs.The trunk is either featureless or divided 
                    by heteronomous annulations. The "head" and "tail" end of the animal are difficult 
                    to identify; one end extends some distance beyond the legs and often droops down 
                    as if to reach the substrate. Some specimens display traces of a simple gut.
                    </p>
                </div>
            </div>
            <div className={classes.info_section}>
                <img className={classes.image} src={hgenia} alt=""/>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Research in the mid-2010s clarified that the longer end is a head with anteroventral
                    mouth and at least a pair of simple eyes.The shape of head differs between species – 
                    elongated in H. sparsa, rounded in H. fortis, while those of H. hongmeia remain unknown. 
                    At least in H. sparsa, the head possesses radial teeth and pharyngeal teeth within the front of the gut.
                    </p>
                </div>
            </div>
        </div>
    );
}