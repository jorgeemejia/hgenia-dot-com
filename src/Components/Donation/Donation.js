import classes from './Donation.module.css';


export default function Donation () {
    return (
        <div className={classes.donation_section}>
            <p className={classes.adopt_btn}>
                Adopt a Hallucigenia
            </p>
            <p className={classes.adopt_txt}>
                Give a gift that will help protect the future of nature. Make a symbolic <br/>
                adoption in support of WWF's global efforts.
            </p>
        </div>
    );
}