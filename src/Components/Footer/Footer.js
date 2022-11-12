import classes from "./Footer.module.css";

export default function Footer() {
    return(
        <div className={classes.footer_section}>
            <p className={classes.tab}>Legal</p>
            <p className={classes.tab}>Privacy Center</p>
            <p className={classes.tab}>Privacy Policy</p>
            <p className={classes.tab}>Cookies</p>
            <p className={classes.tab}>About Ads</p>
            <p className={classes.tab}>Additional CA Privacy Distribution</p>
        </div>
    )
}