import styled from "styled-components";

export const SliderStyled = styled.div`
  /* background-color: #f2f2f2; */
  width: 50%;
  margin-top: 80px;
  .slider-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 25px;

    .images {
      width: 120px;
      height: 140px;
      background-color: azure;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      img {
        width: 100px;
      }
    }

    .corusel {
      width: 70%;

      .slick-dots {
        li {
          display: none;
        }
      }

      .slick-slider {
        .slick-prev {
          position: absolute;
          top: 70px;
          left: 1px;
          background-color: #f2f2f2;
          border-radius: 50%;
        }
        .slick-next {
          position: absolute;
          top: 70px;
          left: 25px;
          background-color: #f2f2f2;
          border-radius: 50%;
        }
      }
    }
  }

`;
