import React from "react";
import './css/footer.css'
import SimpleMap from "./google_map";

function Footer(){
    return(
        <>
        <div className="footer">
            <hr className="footLine"/>
                <p className="Pfooter">Контакты</p>  
            <hr className="footLine2" />
            </div>
        <div className="footInfo">
            <div className="jobTime">
                <p className="h3">Время работы</p>
                <p>Пн-Пт: 9:00-21:00<br />Сб-Вс: 9:00-17:00</p>
            </div>
            <div className="callNumber">
                <p className="h3">Номера телефонов</p>
                <p>8 029 111 11 11 <br />8 029 777 77 77</p>
            </div>
           
        </div>
        <SimpleMap/>
        </>
    )
}

export default Footer;