import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id='header'>
            <div id = 'logo'>
                <img src={LOGO_URL}/>
            </div>
            <div id='nav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to= '/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header ;