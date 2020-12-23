import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames';
import {  useState } from "react";

function Nav() {

  const location = useLocation();
  const [phoneMenu,setPhoneMenu] = useState(false);
  const [hideDropDows,setHideDropDown] = useState(true);
  const [hideDropDows2,setHideDropDown2] = useState(true);
  
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
          <li className="dropdown" onClick={()=>setHideDropDown(!hideDropDows)} >
            <span className={classNames('nav-link',
             { 'nav-location': location.pathname==="/ThetaHealing" || location.pathname==="/Curatare" || location.pathname==="/Medidate" })} >ȘEDINTE TERAPIE</span>
            <div className={classNames('dropdown-content',{'hideDropdown': hideDropDows})}  onMouseEnter={()=>setHideDropDown(false)} onMouseLeave={()=>setHideDropDown(true)}>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/ThetaHealing" })} to="/ThetaHealing">Terapie Thetahealing</Link></p>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Curatare" })} to="/Curatare">Curatare energetica</Link></p>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Medidata" })} to="/Medidate">Medidate</Link></p>
          </div>
          </li>
          <li className="dropdown" onClick={()=>setHideDropDown2(!hideDropDows2)} >
            <span className={classNames('nav-link',
             { 'nav-location': location.pathname==="/Manifestare" || location.pathname==="/Anxietate" })} >CURSURI</span>
            <div className={classNames('dropdown-content',{'hideDropdown': hideDropDows2})}  onMouseEnter={()=>setHideDropDown2(false)} onMouseLeave={()=>setHideDropDown2(true)}>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Anxietate" })} to="/Anxietate">Eliberare de Anxietate</Link></p>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Manifestare" })} to="/Manifestare">Sesiuni de Manifestare</Link></p>
          </div>
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
