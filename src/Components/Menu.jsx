import { useState } from "react";
import { Link } from "react-router-dom";


function Menu() {
  const [listMenu, setListMenu] = useState(true);
  const clase = listMenu ? "port" : "port in-menu";

  function handleClick() {
    setListMenu(!listMenu);
    setTimeout(() => {
      setListMenu(listMenu);
    }, 2000);
  }

  return (
    <div className="menu">
      <Link to="/" className="line" >
        HOME
      </Link>
      <Link to="/about" className="line" >
        ABOUT
      </Link>
      <div className="list" onClick={handleClick}>
        <div className="line menu">
          PORTFOLIO
        </div>
        <div className={clase}>
          <Link to="/portDesign" className="line plus" >
            DESIGN
          </Link>
          <Link to="/portPages" className="line plus" >
            PAGES
          </Link>
        </div>
      </div>
      <Link to="/contact" className="line" >
        CONTACT
      </Link>

      {/* LOGO */}
      <h1 className="logo">
        <img src="./src/img/imgIcon/Paw-logo.png" alt="Logo" />
      </h1>
    </div>
  );
}

export default Menu;
