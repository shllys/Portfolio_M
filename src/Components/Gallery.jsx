function Gallery(props) {
  return (
    <div className="gallery">
      <img className="img" src={`./src/img/ImgC/${props.imgOne}.png`} alt="" />
      <img className="img" src={`./src/img/ImgC/${props.imgTwo}.png`} alt="" />
      <img className="img" src={`./src/img/ImgC/${props.imgThree}.png`} alt="" />
      <img className="img" src={`./src/img/ImgC/${props.imgFour}.png`} alt="" />
      <img className="img" src={`./src/img/ImgC/${props.imgFive}.png`} alt="" />
      <div className="more">
        <i className="bx bxl-instagram"></i>
        <a className="titles" href="#" onclick="alerta()">
          MORE
        </a>
      </div>
    </div>
  );
}

export default Gallery;
