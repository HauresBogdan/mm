import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear(); 
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="flex-this-footer">
            <div className="footer-left-flex">
              <p>Ne găsiți și pe social media.</p>
              <p>Vă așteptăm să da-ți un Like, Follow pe Facebook:</p>
              <a href="https://www.facebook.com/thetahealingcumihaelamaierean/"><img src="facebook.svg" alt="facebook" /></a>
            </div>
            <div className="footer-right-flex">
            <p>Telefon</p>
              <div className="flex-this">
                <img src="phone.svg" alt="facebook" /> <p>004 0751 489 914</p>
              </div>
               <p><Link className='footer-contact-link' to="/Contact">Contact</Link></p>
            </div>
          </div>
          <p className="copyright-text">©{currentYear} ThetaHealing cu Mihaela Maierean </p>
        </div>
      </div>
    </>
  );
}
