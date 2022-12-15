import React from "react";
import './css/comp6.css';
import { useEffect } from "react";
import { useState } from "react";

function Component6() {
    let fCount = 2844;
    let everyMonth = 120;
    let clients = 222;

    const time = 5000;
    const step = 10;

    function Counter({ val, time }) {
      
      const [ currVal, setCurrVal ] = useState(0);

      useEffect(() => {
            currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
          
      }, [ currVal ]);
    
      return <div>{currVal}+</div>;
    }

    return (
      <>
        <div className="main-container">
            <div className="real_facts">
                <h3>Реальные факты</h3>
                <p>которые мы не скрываем</p>
            </div>
            <div className="facts">
                <div className="fact">
                  {/* <h3>{Counter(fCount, 5000)}</h3> */}
                  <h3>{fCount}+</h3>
                  <p>автомобилей продано</p>
                </div>
                <div className="fact">
                  <h3>{everyMonth}+</h3>
                  <p>продаем ежемесячно</p>
                </div>
                <div className="fact">
                  <h3>{clients}+</h3>
                  <p>постоянных клиентов</p>
                </div>
                <div className="fact">
                  <h3>5</h3>
                  <p>офисов</p>
                </div>
                <div className="fact">
                  <h3>2</h3>
                  <p>автостоянки</p>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Component6;