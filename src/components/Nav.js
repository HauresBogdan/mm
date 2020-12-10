import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames';
import {  useState } from "react";

function Nav() {

  const location = useLocation();
  const [phoneMenu,setPhoneMenu] = useState(false);
  
  function showPhoneMenu() {
      setPhoneMenu(!phoneMenu);
  }
  
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <h4><Link className="logo-link" to="/">Mihaela Maierean</Link></h4>
        </div>

        <ul className={classNames('', { 'nav-active': phoneMenu===true })}>
          <li>
            <Link className={classNames('nav-link', { 'nav-location': location.pathname==="/" })} to="/">HOME</Link>
          </li>
          <li>
            <Link className={classNames('nav-link', { 'nav-location': location.pathname==="/About" })} to="/About">DESPRE MINE</Link>
          </li>
          <li>
            <Link className={classNames('nav-link', { 'nav-location': location.pathname==="/Sedinte" })} to="/Sedinte">ȘEDINTE TERAPIE</Link>
          </li>
          <li>
            <Link className={classNames('nav-link', { 'nav-location': location.pathname==="/Contact" })} to="/Contact">CONTACT</Link>
          </li>
        </ul>
        <div className={classNames('burger', { 'toggle': phoneMenu===true })} onClick={showPhoneMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
