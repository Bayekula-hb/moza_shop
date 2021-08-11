import { useState, useEffect } from "react";

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
                    <div className="div-reseaux col-4">face instagr </div>
                </div>
            </div>
        </header>
    )
}
export default Header;