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
                    Hallucigenia is a <b>0.5–5.5 cm long</b> tubular animal with up to <b>ten 
                    pairs of slender legs</b>. The first 2 or 3 leg pairs are slender and 
                    featureless, while the remaining 7 or 8 pairs each terminate with 1 or 2 <b>claws</b>. 
                    Placed on the backside of the animal are 7 pairs of rigid conical sclerites <b>(spines)</b>
                    corresponding to the 3rd–9th leg pairs. The spine surface of Sparsa  is covered in <b>triangular scales</b>,
                    while the spine surface of Hongmeia is a net like texture similar to <b>papilae</b>. The "head" and "tail" end of the animal are <b>difficult 
                    to identify</b>; one end extends some distance beyond the legs and often droops down 
                    as if to reach the substrate. Some specimens display traces of a simple gut.
                    </p>
                </div>
            </div>
            <div className={classes.info_section}>
                <img className={classes.image} src={hgenia} alt=""/>
                <div className={classes.text_box}>
                    <p className={classes.text}>
                    Research in the mid-2010s <b>clarified</b> that the longer end is a head with <b> anteroventral </b>
                    mouth and at least a pair of <b>simple eyes</b>.The shape of head differs between species – 
                    elongated in H. sparsa, rounded in H. fortis, while those of H. hongmeia remain unknown. 
                    At least in H. sparsa, the head possesses radial (circular) teeth and pharyngeal teeth within the front of the gut.
                    </p>
                </div>
            </div>
        </div>
    );
}