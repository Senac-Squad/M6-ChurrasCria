import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import ava01 from "../../../assets/images/ava-1.png";
import "../../../styles/slider.css";

const NotaSlider = () => {
  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplayspeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [avaliacao, setAvaliacao] = useState([]);

  useEffect(() => {
    async function fetchAvaliacao() {
      try {
        const response = await axios.get(`http://localhost:3001/avaliar`);
        const avaliacao = response.data;
        setAvaliacao(avaliacao.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAvaliacao();
  }, []);

  return (
    <Slider {...settings}>
      {avaliacao.map((avaliar) => (
        <div key={avaliar.id}>
          <p className="depoimento__desc">{avaliar.nota}</p>
          <p className="review__text">{avaliar.mensagem}</p>
          <div className=" slider__content d-flex align-items-center gap-3 ">
            <img src={ava01} alt="avatar" className=" rounded" />
            <h6>Usuario(a)</h6>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default NotaSlider;
