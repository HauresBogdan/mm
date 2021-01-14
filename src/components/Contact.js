import Footer from "./Footer";
import "../sidepagecss/thetahealing.css";
import "../sidepagecss/contact.css";
import { HashLink as Link } from "react-router-hash-link";
import { useForm } from "react-hook-form";
import {useState} from "react";

function Contact() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const [submited, SetSubmited ] = useState(false); 
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  const onSubmit = (data) => {
    

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
      // body: new URLSearchParams(data).toString()
    }).then(() => 
    console.log('Form successfully submitted')
    ).catch((error) =>
      alert(error));
     
    console.log(data);
    SetSubmited(true);
  };

  return (
    <>
      <section className="th-sec">
        <div className="th-banner">
          <h1 className="th-container">Contact</h1>
        </div>
        <section className="thp-hero background-contact">
          <div className="contact-and-text th-container">
            <div className="contact-contact form-container">

            {submited===false ?
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name">Nume</label>
              <div className="contact-errors">
                <p>{errors.name && "Nu ai introdus numele"}</p>
              </div>
              <input type="text" id="name" name="name" placeholder="Nume" ref={register({ required: true })} />
              <label htmlFor="email">Email</label>
              <div className="contact-errors">
                <p>{errors.email && "Email invalid"}</p>
              </div>
              <input type="email" id="email" name="email" placeholder="Email.." ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} />
              <label htmlFor="subject">Mesaj</label>
              <div className="contact-errors">
                <p>{errors.subject && "Nu ai introdus nici un mesaj"}</p>
              </div>
              <textarea id="subject" name="subject" placeholder="Msg.." style={{ height: "200px" }} defaultValue={""} ref={register({ required: true })} />
              <div className="display-block" data-netlify-recaptcha="true"></div>
              <button className="violet-btn" type="submit">
                Trimite
              </button>


              <div className="contact-text">
             <p>
              Ai vreo întrebare care nu se găsește în{" "}
              <Link className="faq-link" to="/ThetaHealing#questions">
                faq
              </Link>
              ?
            </p>
            <p>Contactează-mă:</p>             
            <p>E-mail: healing.mihaelamaierean@gmail.com</p>
            <p>
              Vizitează-mă pe <a href="https://www.facebook.com/thetahealingcumihaelamaierean/">facebook.</a>{" "}
            </p> 
          </div>

            </form> : <div className="success-contact">
            <h1>Mulțumesc!</h1>
            <p>Am să încerc să te contactez în cel mai scurt timp.</p> 

            </div> 
          
          
          
          }

            




            </div>
            <div className="contact-img">
              <img src="thp-1.jpg" alt="mihaela maierean"/>
            </div>          
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
