import React from "react";
import "./css/contacts.css";
import hellcat from "./css/images/hellcat.jpg"
import Footer from "./footer";

function Contacts(){
    return(
        <>
            <div className="top-view" style={{backgroundImage: `url(${hellcat})`}}></div>
            <p className="ourSoc">Наши социальные сети</p>
            <div className="socials">
                <div className="net">
                    <a href="https://www.instagram.com/dmitryby19/" target={"_blank"}><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" /></a>
                </div>
                <div className="net">
                    <a href="https://www.instagram.com/dmitryby19/" target={"_blank"}><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"/></a>
                </div>
                <div className="net">
                <a href="https://www.instagram.com/dmitryby19/" target={"_blank"}><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="" /></a>
                </div>
            </div>
            <div className="container-1 contact">
                <p>Вы можете связаться с нами в людой удобной вам социальной сети, а также <br />по мобильному телефону или email.</p>
                <p>Наши менеджеры помогут вам определиться с покупкой и условиями доставки. <br />Так-же в разделе <span>"КАТАЛОГ"</span> имеется кнопка для заполнения электронной заявки. <br />в течении 4х часов после заполнения заявки наши менеджеры свяжутся с вами.</p>
            </div>
            <Footer/>
        </>
    )
}

export default Contacts;