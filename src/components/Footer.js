import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="flex-this-footer">
            <div className="footer-left-flex">
              <p>Urmărește-mă pe:</p>
             
              <div>
              <a href="https://www.facebook.com/thetahealingcumihaelamaierean/">
                <img src="facebook.svg" alt="facebook" />
              </a>
              <a href="https://www.instagram.com/mihaela.maierean">
                <img src="instagram.svg" alt="instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCBfEpp1nOvUHA_edhj1uCvA">
                <img src="youtube.svg" alt="youtube" />
              </a>

              </div>
              {/* <p className="mt10px ">
                <Link className="footer-contact-link" to="/Comunitate">
                ✨ Comunitatea Gândurilor pozitive 
                </Link>
              </p> */}
             
            </div>
            <div className="footer-right-flex">
              {/* <p>Telefon</p>
              <div className="flex-this">
                <img src="phone.svg" alt="tel" />

                <p>004 0751 489 914</p> 
              </div> */}
              
              <p>
                <Link className="footer-contact-link" to="/Contact">
                  Contact
                </Link>
              </p>
              <p>healing.mihaelamaierean@gmail.com</p>
            </div>
          </div>
          <p className="copyright-text">©{currentYear} ThetaHealing cu Mihaela Maierean </p>
        </div>
      </div>
    </>
  );
}
