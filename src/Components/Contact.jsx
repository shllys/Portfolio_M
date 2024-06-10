import emailjs from '@emailjs/browser';
import { useState } from "react";

import Menu from "./Menu";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const servicerId = 'service_uabjdd8';
    const templeteId = 'template_ggzui8e';
    const publicKey = 'pVFmtcsV73T1OfDap';

    const templeParems = {
      from_name: name,
      form_email: email,
      form_phone: phone,
      to_name: 'shllygp17.8@gmail.com',
      message: message
    }

    emailjs
      .sendForm(servicerId, templeteId, templeParems, publicKey)
      .then((response) => {
        console.log('HECHO!', response);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email', error)
      });
  }



  return (
    <div className="contact">
      <div className="box_contactM">
        <div className="contact-me">
          <div className="back">
            <p className="titles">CONTACT</p>
          </div>

          <Menu />

          <form
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="datos">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Correo"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                name="number"
                placeholder="Numero"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="divide"></div>
            <textarea
              name="message"
              className="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="btn" type="submit">
              Enviar
            </button>
          </form>

          <div className="contact-icons">
            <a href="https://github.com/shllys">
              <i class="fi fi-brands-github"></i>
            </a>
            <a href="https://www.instagram.com/shellys.axel/">
              <i class="fi fi-brands-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/mishelis-martinez-40ba11260/">
              <i class="fi fi-brands-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="chat-burble">
        <img
          className="burble"
          src="./src/img/imgIcon/chat-bubble.png"
          alt=""
        />
      </div>

      <div className="box_name">
        <div className="hecho-por">
          <h1 className="name">©Mishelis Y. Martinez</h1>
          <span className="fecha">2024</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
