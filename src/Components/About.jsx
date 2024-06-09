

function About() {
  return (
    <div className="about">
      <div className="icon-menu">
        <i className='bx bx-menu' id="menu"></i>
      </div>

      <div className="skillv">
        <div className="back" >
          <p className="titles">SKILL</p>
        </div>

        <div className="habilidades">
          <img src="./img/hojas.png" alt="" className="right" />
          <div className="medium">
            <span className="leven">Medium</span>
            <i className="bx bxl-css3"></i>
            <i className="bx bxl-figma"></i>
          </div>
          <div className="divide"></div>
          <div className="basic">
            <span className="leven">Basic</span>
            <i className="bx bxl-bootstrap"></i>
            <i className="bx bxl-javascript"></i>
          </div>
          <img src="./img/hojas.png" alt="" className="left" />
        </div>
      </div>

      <div className="about-me">
        <div className="back" >
          <p className="titles">ABOUT ME</p>
        </div>
        <div className="texts">
            <p className="paragraph"> "Estudia de forma Autodidacta, busca ser mejor y tener habilidades que le hagan ser autosuficiente, emprender su propia carrera de diseñadora web, ilustradora, desarrolladora Front-End y de modelado 3D... Aun falta pero quiere ser fuerte." </p>
            <img className="big-logo" src="./img/logo-black.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
