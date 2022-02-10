import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import DataArr from '../DataArr';
import '../App.css';

const FooterSec = () => {
    return (
        <footer>
            <div className="container">
                <div>
                    <h5>COMPANY</h5>
                    {DataArr.slice(0, 6).map((val) => {
                        return(
                            <a href="#">{val.link}</a>
                        )
                    })}
                    
                </div>
                <div>
                    <h5>CONTACT</h5>
                    {DataArr.slice(6, 9).map((val) => {
                        return(
                            <a href="#">{val.link}</a>
                        )
                    })}
                </div>
                <div>
                    <h5>LEGAL</h5>
                    {DataArr.slice(9, 14).map((val) => {
                        return(
                            <a href="#">{val.link}</a>
                        )
                    })}
                </div>
            </div>
            <div className="copyright">
                <div><FastfoodSharpIcon fontSize="small" /> FOODY</div>
                <p>&#169; 2020 Foody</p>
                <div className="socials">
                    <FacebookIcon
                        style={{
                            color: '#fff',
                            transition: ".3s",
                            cursor: "pointer"
                        }}
                    />
                    <PinterestIcon
                        style={{
                            color: '#fff',
                            transition: ".3s",
                            cursor: "pointer"
                        }}
                    />
                    <InstagramIcon
                        style={{
                            color: '#fff',
                            transition: ".3s",
                            cursor: "pointer"
                        }}
                    />
                    <TwitterIcon
                        style={{
                            color: '#fff',
                            transition: ".3s",
                            cursor: "pointer"
                        }}
                    />
                </div>
            </div>
        </footer>
    )
}

export default FooterSec;