import React from 'react';
import'./css/comp4.css';
import Dodge from './css/images/dodge.png';


function Component4() {

  return (
    <>
      <div className='container4'>
          <p className='answers'>СОВЕТЫ ПОКУПАТЕЛЯМ</p>
          <p className='answer-text'> Выгоднее всего покупать битое авто <br /> с аукциона. Его восстановление в РБ <br />
          обойдется куда дешеле чем покупка <br />
          целого автомобиля.<span>*</span></p>
          <img src={Dodge} className='dodge'/>
          </div>

    </>
  );
}

export default Component4;