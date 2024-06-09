import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";


import Menu from "./Menu";
import Documento from ".././CV_Mishelis.pdf";



function Principal() {
  const [message, setMessage] = useState("");

  function copyText() {
    navigator.clipboard.writeText("shllygp17.8@gmail.com");
    setMessage("Gmail Copiado!");
  }

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 6000);
  }, [message]);

  const [textEffect] = useTypewriter({
    words: ['Developer', 'Designer'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 60
  })



  return (
    <section className="principal">
      <div className="box">
        <div className="header">
          <div className="icon-menu">
            <i className="bx bx-menu" id="menu"></i>
          </div>

          {/* MENU */}
          <Menu />
        </div>
      </div>

      <div className="presentation">
        <div className="avatar">
          <img src="./src/img/My_Avatar.png" alt="" />
        </div>

        <div className="name">
          <h1 className="myName">Mishelis Martinez</h1>
          <h3 className="myVocation">
            {textEffect}
            <Cursor cursorStyle='|' />
          </h3>
        </div>
      </div>

      <div className="cont-info">
        <div className="box_skill">
          <div className="skillP active">
            <div className="front">
              <p className="titles">SKILL</p>
            </div>
            {/* HABILIDADES */}
            <div className="habilidades">
              <i className="fi fi-brands-css3"></i>
              <i className="fi fi-brands-figma"></i>
              <i className="bx bxl-javascript"></i>
              <i className="fi fi-brands-bootstrap"></i>
              <i className="bx bxl-react"></i>
            </div>
          </div>
        </div>

        <div className="box_port">
          <div className="portfolioP active">
            <p className="titles">PORTFOLIO</p>
            {/* IMÁGENES */}
            <div className="galleries">
              <div className="cont-img">
                <Link to="/portPages">
                  <img src="./src/img/imgIcon/codingIcon.png" alt="Paginas" />
                </Link>
              </div>
              <div className="cont-img">
                <Link to="/portDesign">
                <img src="./src/img/imgIcon/designIcon.png" alt="Diseños" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="contactP">
          <i className="fi fi-tr-circle-envelope"></i>
          <i className="fi fi-sr-copy-alt" onClick={copyText}>
            <p className="gmail">shllygp17.8@gmail.com</p>
            <span className="mensaje">{message}</span>
          </i>
          <a href={Documento} download={''}>
          <i className="fi fi-tr-file-download">
          </i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Principal;
