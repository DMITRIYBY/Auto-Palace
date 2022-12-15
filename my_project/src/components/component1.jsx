import React from 'react';
import './css/comp1.css';


function Component1() {


  return (
    <>
        <div className='component1'>
            <div className="mclaren">
              <p className="picText txt1">McLaren</p>
              <p className='picText txt2'>765LT</p>
            </div>
            <div className="cont2">
              <p className='picText txt3'>Купите автомобиль мечты в разы дешевле <br />
              вместе с Auto Palace</p>
              <p className="picText txt4">от $140,000 <span>*</span></p>
            </div>
        </div>
    </>
  );
}

export default Component1;