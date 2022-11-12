import classes from "./References.module.css";
import waterBG from '../Images/Origins/waterBG.jpg';

export default function References() {
    return (
        <div className={classes.references_page}>
            <div className={classes.hero_section}>
                <img className={classes.hero_image} src={waterBG} alt= "" width="100%" height="556"/>
                <h1 className={classes.header}>References</h1>
            </div>
            <p className={classes.text}>https://collections.nmnh.si.edu/search/paleo/?ark=ark:/65665/3ab2556de8262492795eb95b338fa9e0b</p>
            <p className={classes.text}>https://repository.si.edu/bitstream/handle/10088/34820/SMC_57_Walcott_1910_5_109-144.pdf?sequence=1&isAllowed=y</p>
            <p className={classes.text}>https://www.palass.org/publications/palaeontology-journal/archive/20/3/article_pp623-640</p>
            <p className={classes.text}>https://archive.org/details/wonderfullifebur00goul</p>
            <p className={classes.text}>https://www.cell.com/current-biology/fulltext/S0960-9822(15)00831-3?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0960982215008313%3Fshowall%3Dtrue</p>
            <p className={classes.text}>https://www.semanticscholar.org/paper/New-early-Cambrian-animal-and-onychophoran-of-Ramsk%C3%B6ld-Xian-guang/a30830f84da8d771b813d55f66dbb595aa9d7aa1</p>
            <p className={classes.text}>https://onlinelibrary.wiley.com/doi/10.1111/j.1502-3931.1992.tb01389.x</p>
            <p className={classes.text}>https://dro.dur.ac.uk/20476/1/20476.pdf</p>
            <p className={classes.text}>https://www.sciencedirect.com/science/article/abs/pii/S003101821300285X</p>
            <p className={classes.text}>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6124121/</p>
            <p className={classes.text}>http://www.geology.cz/bulletin/fulltext/1280_Steiner.pdf</p>
            <p className={classes.text}>https://dro.dur.ac.uk/19108/1/19108.pdf</p>
            <p className={classes.text}></p>
            <p className={classes.text}></p>
        </div>
    );
}
