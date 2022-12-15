import React from 'react';
import SalesCard from './SalesCard';
import './css/comp3.css';
import porsche from './css/images/porsche.jpeg'

function Component3() {


  return (
    <>
      <div className='container3'>
        <div className='inBelarus'>
            <h3>Популярно в Беларуси</h3>
            <hr className='line'/>
        </div>
        <div className='cards'>
            <SalesCard className="pipa" image = {"https://www.cnet.com/a/img/resize/dfb9ac3b3feac99d887026a62f46aa713cfd5cf7/hub/2021/01/15/3aa7b9a6-8916-4ad7-9d5d-727172adf3e4/qx80-promo.jpg?auto=webp&width=768"} mark={"Infinity QX80"} year={"Год: 2022"} price={"289 000"}/>
            <SalesCard className="pipa" image = {"https://www.cnet.com/a/img/resize/dfb9ac3b3feac99d887026a62f46aa713cfd5cf7/hub/2021/01/15/3aa7b9a6-8916-4ad7-9d5d-727172adf3e4/qx80-promo.jpg?auto=webp&width=768"} mark={"Infinity QX80"} year={"Год: 2022"} price={"289 000"}/>
            <SalesCard className="pipa" image = {"https://www.cnet.com/a/img/resize/dfb9ac3b3feac99d887026a62f46aa713cfd5cf7/hub/2021/01/15/3aa7b9a6-8916-4ad7-9d5d-727172adf3e4/qx80-promo.jpg?auto=webp&width=768"} mark={"Infinity QX80"} year={"Год: 2022"} price={"289 000"}/>
        </div>
        <div className='inBelarus'>
            <h3 className='passOfweek'>Предложение недели</h3>
            <hr className='line'/>
            <div className="weekPass" style={{backgroundImage: `url(${porsche})`}}>
                <p className='porsche'>Porsche 911 <br />Turbo S</p>
                <p className='weekPrice'>от $110,000 <span>*</span></p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Component3;