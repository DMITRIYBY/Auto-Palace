import React from 'react';
import './css/comp2.css';


function Component2() {
  

  return (
    <>
      <div className='container'>
        <div className='text-container'>
        <h3>О компании</h3>
        <hr className='line'/>
          <p>Наша компания работает на американском рынке уже более 10 лет. Более <br />
          3-х лет мы работаем на рынке Беларуси.</p>
          <p>Работаем без посредников, поэтому можем предложить самую низку цену <br /> на авто. Мы ценим своих клиентов и сопровождаем их на всех этапах <br />
          сделки. Благодаря этому наши клиенты получают проверенный <br /> автомобиль без переплат и сюрпризов.</p>
          <p className='italic'>На данный момент у нас более 1200 постоянных клиентов, которым мы <br />
          помогли выбрать и приобрести более 5000 авто из США на заказ.</p>
          <p className='italic'>Вначале 2021г наша компания вышла на автомобильный рынок РБ, <br />
          открыв несколько офисов в крупных городах страны.</p>
          </div>
      </div>
    </>
  );
}

export default Component2;