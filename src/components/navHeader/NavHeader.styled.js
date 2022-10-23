import styled from "styled-components";

const NavHeaderStyled = styled.div`
  height: calc(100vh - 150px);
  .element {
    margin: 80px 0 0 0;
    .title {
      h2 {
        font-size: 70px;
      }

      p {
        font-size: 20px;
        color: gray;
        font-family: monospace;
        word-spacing: 8px;
        margin-top: 15px;
        line-height: 140%;
      }
    }

    .appointment {
      display: flex;
      align-items: center;
      margin-top: 30px;
      gap: 30px;

      .book {
        width: 220px;
        background-color: #57c1fa;
        height: 55px;
        border-radius: 25px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
        }
      }

      .vedio {
        display: flex;
        align-items: center;
        gap: 10px;

        .border {
          width: 50px;
          height: 50px;
          border: 1px solid #57c1fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .bg-icon {
            width: 30px;
            height: 30px;
            background-color: #c9e5f5;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
              img {
                width: 20px;
              }
            }
          }
        }
      }

      .watch {
        a {
          text-decoration: none;
          font-size: 16px;
          color: #17242b;
        }
      }
    }
  }
  .teeth {
    position: absolute;
    width: 40%;
    top: 0;
    right: 0;
    img {
      width: 100%;
      height: 500px;
    }
  }

  .contact-main {
    margin-left: auto;
    position: relative;
    .contact {
      position: absolute;
      right: 0;
      top: -90px;
      display: flex;
      background-color: #57c1fa;
      padding: 40px 30px 50px 30px;
      gap: 25px;
      width: 45%;
      border-radius: 10px;
      img {
        width: 20px;
      }
      .phone {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .nomer {
          display: flex;
          gap: 15px;
          a {
            text-decoration: none;
            color: #fff;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      .message {
        display: flex;
        gap: 15px;
        a {
          text-decoration: none;
          color: #fff;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export default NavHeaderStyled;
