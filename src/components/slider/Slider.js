import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority
            </p>
          </div>
          <div>
            {/* <img src={baseUrl + "/abstract02.jpg"} /> */}
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece
            </p>
          </div>
          <div>
            {/* <img src={baseUrl + "/abstract03.jpg"} /> */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
          </div>
          <div>
            {/* <img src={baseUrl + "/abstract04.jpg"} /> */}
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
        </Slider>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  p {
    font-size: 16px;
    color: grey;
    line-height: 150%;
    font-family: sans-serif;
  }
`;
