import React from 'react';
import './salesCard.css';
import { Link } from "react-router-dom";


function SalesCard(props) {

  return (
    <>
      <div className='card'>
        <img src={props.image}/>
        <p className='mark'>{props.mark}</p>
        <p className='year'>Год: {props.year}</p>
        <p className='cardPrice'>Цена под ключ: <span>{props.price} BYN</span></p>
        {/* <button onClick={() => <Modal/>}>Подобрать</button> */}
        <Link className='buttons' to='/newpage' >Подобрать</Link>
      </div>
    </>
  );
}

export default SalesCard;


