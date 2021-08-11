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
                <div className="div-date-reseaux row">
                    <div className="div-date col-3">{dateState}</div>
                    <div className="div-reseaux col-4">
                        <ul>
                            <li className="link-reseaux"><a href="facebook.com"><Image src={fb} alt="facebook"/></a></li>
                            <li className="link-reseaux"><a href="facebook.com"><Image src={instagram} alt="facebook"/></a></li>
                            <li className="link-reseaux"><a href="facebook.com"><Image src={twitter} alt="facebook"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;