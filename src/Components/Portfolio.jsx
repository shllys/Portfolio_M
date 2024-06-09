import { Link } from "react-router-dom";
import Menu from "./Menu";

function Portfolio(props) {
  return (
    <div className="design">
      <div className="icon-menu">
        <i className="bx bx-menu" id="menu"></i>
      </div>

      <Link to="/" className="backP">
        <img
          className={props.classLogo}
          src={`./src/img/imgIcon/${props.iconTitle}.png`}
          alt=""
        />
        <span className="titles">{props.title}</span>
      </Link>

      <div className="box_PortGa">
        <div className="portDesign">
            <div className="description">
              <span>No habrá mucho pero...</span>
              <p>{props.text}</p>
            </div>
            
            <Menu />

          <div className="gallery">
            <img
              className="img"
              src={`./src/img/${props.carp}/${props.imgOne}.png`}
              alt=""
            />
            <img
              className="img"
              src={`./src/img/${props.carp}/${props.imgTwo}.png`}
              alt=""
            />
            <img
              className="img"
              src={`./src/img/${props.carp}/${props.imgThree}.png`}
              alt=""
            />
            <img
              className="img"
              src={`./src/img/${props.carp}/${props.imgFour}.png`}
              alt=""
            />
            <img
              className="img"
              src={`./src/img/${props.carp}/${props.imgFive}.png`}
              alt=""
            />
            <div className="more">
              <i className={props.iconRed}></i>
              <a className="titles" href={props.link}>
                MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
