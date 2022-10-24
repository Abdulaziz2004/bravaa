import category from "../../assats/img/category-doctor.jpg";
import { Container } from "../../Wrapper";
import { Main } from "./Category.styled";
import category2 from "../../assats/img/dactor4.jpg";
import doctorsvg from "../../assats/icon/docyor5.png";

function Cetegory() {
  return (
    <Main>
      <Container>
        <div className="category">
          <div className="category-grid">
            <div className="category-img">
              <img src={category2} alt="" />
            </div>

            <div className="item">
              <div className="title">
                <h2>
                  Why choose Smile for <br /> all your dental treatment?
                </h2>
                <p>
                  We use only the bast quality materials on the market in order
                  to provide best products to our patents
                </p>
              </div>

              <div className="galochka">
                <div className="galochka-icon">&#10003;</div>
                <div>
                  <h3>Top quality dantal team</h3>
                </div>
              </div>

              <div className="galochka">
                <div className="galochka-icon">&#10003;</div>
                <div>
                  <h3>State of the art dantel servise </h3>
                </div>
              </div>

              <div className="galochka">
                <div className="galochka-icon">&#10003;</div>
                <div>
                  <h3>Top quality dantal team</h3>
                </div>
              </div>

              <div className="galochka">
                <div className="galochka-icon">&#10003;</div>
                <div>
                  <h3>Top quality dantal team</h3>
                </div>
              </div>

              <div className="btn">
                <button>Book An Appointment</button>
              </div>
            </div>
          </div>

          <div className="doctor-position">
            <div className="title">
              <h4>Available Doctor</h4>
              <p>Select Doctor</p>

              <div className="doctor-name">
                <div className="doctor-svg">
                  <img src={doctorsvg} alt="" />
                </div>
                <div>
                  <h5>Drain Smith, AM</h5>
                  <span>Vascular Sergey</span>
                </div>
              </div>

              <div className="doctor-name">
                <div className="doctor-svg">
                  <img src={doctorsvg} alt="" />
                </div>
                <div>
                  <h5>Drain Smith, AM</h5>
                  <span>Vascular Sergey</span>
                </div>
              </div>

              <div className="doctor-find">
                <a href="#">Find Doctors</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
}

export default Cetegory;
