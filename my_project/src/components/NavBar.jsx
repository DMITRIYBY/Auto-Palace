import { Link } from "react-router-dom";
import './css/navBar.css';
import { useState } from "react";
import logo from './css/images/logo.svg'

function NavBar() {

  const [isShow, setShow] = useState(false);


  
  return (
    <>
    <img src={logo} className="logo"/>
    <div className='header'>
    
      
      <button className="sliding-button" onClick={()=>setShow(!isShow)}>MENU</button>
      <div className='nav' style={isShow?{display: "flex"}:{display: "none"}}>
      <Link path={""} className='a' to='/main' defaultChecked>О КОМПАНИИ</Link>
      <Link className='a' to='/newpage'>КАТАЛОГ</Link>
      <Link className='a' to='/prices'>ПРАЙСЫ</Link>
      <Link className='a' to='/contacts'>КОНТАКТЫ</Link>
      </div>
    </div>

    </>
  );
}

export default NavBar;