import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames';
import {  useState, useEffect } from "react";

function Nav() {

  const location = useLocation();
  const [phoneMenu,setPhoneMenu] = useState(false);
  const [hideDropDows,setHideDropDown] = useState(true);
  const [hideDropDows2,setHideDropDown2] = useState(true);

  const [hideModal,setHideModal] = useState(true);
  
  function showPhoneMenu() {
      setPhoneMenu(!phoneMenu);
  }

  function toggleModal() {
    setHideModal(!hideModal);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideModal(false);
      console.log("active");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <h4><Link className="logo-link" to="/">Mihaela Maierean</Link></h4>
        </div>

        <ul className={classNames('', { 'nav-active': phoneMenu===true })}>
          <li>
            <Link className={classNames('nav-link', { 'nav-location': location.pathname==="/" })} to="/" onClick={showPhoneMenu}>HOME</Link>
          </li>
          <li>
            <Link className={classNames('nav-link', { 'nav-location': location.pathname==="/About" })} to="/About" onClick={showPhoneMenu}>DESPRE MINE</Link>
          </li>
          <li className="dropdown" onClick={()=>setHideDropDown(!hideDropDows)} >
            <span className={classNames('nav-link',
             { 'nav-location': location.pathname==="/ThetaHealing" || location.pathname==="/Curatare" || location.pathname==="/Medidate" })} >ȘEDINTE TERAPIE</span>
            <div className={classNames('dropdown-content',{'hideDropdown': hideDropDows})}  onMouseEnter={()=>setHideDropDown(false)} onMouseLeave={()=>setHideDropDown(true)}>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/ThetaHealing" })} to="/ThetaHealing" onClick={showPhoneMenu}>Terapie ThetaHealing</Link></p>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Curatare" })} to="/Curatare" onClick={showPhoneMenu}>Curățare energetică</Link></p>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Medidata" })} to="/Medidate" onClick={showPhoneMenu}>MediDate</Link></p>
          </div>
          </li>
          <li className="dropdown" onClick={()=>setHideDropDown2(!hideDropDows2)} >
            <span className={classNames('nav-link',
             { 'nav-location': location.pathname==="/Manifestare" || location.pathname==="/Anxietate" })} >CURSURI</span>
            <div className={classNames('dropdown-content',{'hideDropdown': hideDropDows2})}  onMouseEnter={()=>setHideDropDown2(false)} onMouseLeave={()=>setHideDropDown2(true)}>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Anxietate" })} to="/Anxietate" onClick={showPhoneMenu}>Eliberare de Anxietate</Link></p>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Manifestare" })} to="/Manifestare" onClick={showPhoneMenu}>Sesiuni de Manifestare</Link></p>
            <p><Link className={classNames('nav-link2', { 'nav-location': location.pathname==="/Comunitate" })} to="/Comunitate" onClick={showPhoneMenu}>Comunitatea gândurilor pozitive</Link></p> 
          </div>
          </li>
          <li>
            <Link className={classNames('nav-link', { 'nav-location': location.pathname==="/Contact" })} to="/Contact" onClick={showPhoneMenu}>CONTACT</Link>
          </li>
        </ul>
        <div className={classNames('burger', { 'toggle': phoneMenu===true })} onClick={showPhoneMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className="under-nav">

      </div>

  <div className={classNames('mymodal-bg',{'activate': hideModal===false})}>
      <div className="mymodal">
          
          <img src="comunitatea.jpg" alt="comunitate"/>
          <button onClick={toggleModal}> <Link className="footer-contact-link" to="/Comunitate">
          VIZITEAZĂ 
                </Link></button>
          <span className="mymodal-close" onClick={toggleModal}>X</span>
      </div>
  </div>

    </div>
  );
}

export default Nav;
