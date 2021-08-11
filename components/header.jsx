import { useState, useEffect } from "react";
import Image from 'next/image';
import fb from "../public/images/facebook-brands.svg";
import instagram from "../public/images/instagram-brands.svg";
import twitter from "../public/images/twitter-square-brands.svg";

const Header =()=>{
    const [dateState, setdateState] = useState("");
    const getDateToDay =()=>{
        const dateDuJour = new Date().toDateString();
        setdateState(dateDuJour);
    }
    useEffect(() => {
        getDateToDay()
    }, [])
    return(
        <header>
            <div className="div-container container">
                <div className="div-date-reseaux row container justify-content-between ">
                    <div className="div-date col-3">{dateState}</div>
                    <div className="div-reseaux col-2">
                        <ul className="menu-reseaux navbar-nav mr-auto mt-2 mt-lg-0 justify-content-between">
                            <li className="link-reseaux col-4 nav-item"><a href="facebook.com" className="nav-link"><Image src={fb} alt="facebook"/></a></li>
                            <li className="link-reseaux col-4 nav-item"><a href="facebook.com" className="nav-link"><Image src={instagram} alt="facebook"/></a></li>
                            <li className="link-reseaux col-4 nav-item"><a href="facebook.com" className="nav-link"><Image src={twitter} alt="facebook"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;