import { Container } from "../../Wrapper";
import NavHeaderStyled from "./NavHeader.styled";
import play from "../../assats/icon/play.png";
import teeth from "../../assats/img/teeth3.jpg";
import Fade from "../slider/Slider";
import doctor from "../../assats/img/doctor.jpg";
import { SliderStyled } from "../slider/Slider.styled";
import phone from "../../assats/icon/phone2.png";
import location from "../../assats/icon/location.png";
import talk from "../../assats/icon/talk.png";

function NavHeaderMain() {
  return (
    <NavHeaderStyled>
      <Container>
        <div className="element">
          <div className="title">
            <h2>
              Your teeth now <br /> our care!
            </h2>
            <p>
              We use only the best quality materials on order <br /> to
              provivide the best products to our patents
            </p>
          </div>

          <div className="appointment">
            <div className="book">
              <a href="#">Book An Appointment</a>
            </div>
            <div className="vedio">
              <div className="border">
                <div className="bg-icon">
                  <div className="icon">
                    <a href="#">
                      <img src={play} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="watch">
                <a href="#">Watch Vedio</a>
              </div>
            </div>
          </div>
        </div>

        <SliderStyled>
          <div className="slider-container">
            <div className="images">
              <img src={doctor} alt="" />
            </div>
            <div className="corusel">
              <Fade />
            </div>
          </div>
        </SliderStyled>

        <div className="contact-main">
          <div className="contact">
            <div className="phone">
              <div className="nomer">
                <img src={phone} alt="" />
                <a href="#">(998) 99-075-8171</a>
              </div>

              <div className="nomer">
                <div>
                  <img src={location} alt="" />
                </div>
                <a href="#">
                  76 New York DR. <br /> Milan Jaskm, USE
                </a>
              </div>
            </div>

            <div className="message">
              <div>
                <img src={talk} alt="" />
              </div>
              <a href="#">abu556626@gmail.com</a>
            </div>
          </div>
        </div>
      </Container>
      <div className="teeth">
        <img src={teeth} alt="" />
      </div>
    </NavHeaderStyled>
  );
}

export default NavHeaderMain;
