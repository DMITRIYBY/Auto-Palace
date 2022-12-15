import React from "react";
import './css/prices.css';
import lexus from './css/images/lexus500.jpeg'
import Footer from './footer.jsx'



function Prices(){
    return(
        <>
            <div className="lexus" style={{backgroundImage: `url(${lexus})`}}></div>
            <h3 className="h3-prices">НАШИ РАСЦЕНКИ</h3>
            <div className="container-1">
                <p>Доставка автомобиля - наша основная задача. Компания доставляет 
                автомобили с аукционов США. Как можно подумать, ждать автомо
                биль из-за рубежа не быстрое дело. Однако в нашей компании есть 
                решения по ускоренной доставке. Ниже представлены цены и 
                сроки доставка автомобилей.</p>
            </div>
            <div className="container-2">
                <p>Обыкновенная доставка (до 6 месяцев) - бесплатно</p>
                <p>Ускоренная доставка (до 2х месяцев) ~ 3000 BYN<span>*</span></p>
                <p>Speedy доставка (до 1го месяца) ~ 5000 BYN<span>*</span></p>
            </div>
            <div className="container-3">
                <p>Выше приведены примерные сроки и цены доставки. Все нюансы обговариваются напрямую с заказчиком. Компания не исключает проблем с доставкой, покупкой и оформлением автомобилей на стадии покупки и доставки.</p>
            </div>
            <Footer />
        </>
    )
}

export default Prices;