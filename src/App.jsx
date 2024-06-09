import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Principal from "./Components/Principal";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Principal />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/portDesign"
          element={
            <Portfolio
              title="Designs"
              iconTitle="designIcon"
              text="Diseñar las paginas es algo que me divierte y relaja, a la hora de pensar como seria una pagina para mis futuros clientes..."
              carp="ImgD"
              classLogo="logoD"
              imgOne="ApiMovie"
              imgTwo="art"
              imgThree="autodic"
              imgFour="food"
              imgFive="FirshD"
              link=""
            />
          }
        />

        <Route
          path="/portPages"
          element={
            <Portfolio
              title="Pages"
              iconTitle="codingIcon"
              text="Programar se me a hecho difícil pero aun asi no me he rendido y espero ser mejor cada vez..."
              carp="ImgC"
              classLogo="logoC"
              imgOne="colorsGallery"
              imgTwo="Calculadora"
              imgThree="Gallery"
              imgFour="page-grid"
              imgFive=""
              link="https://github.com/shllys"
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
