import styled from "styled-components";

export const Main = styled.div`
  background-color: #f0f0f0;
  .category {
    padding: 18% 0 10% 0;
    margin-top: 20px;
    position: relative;
    .category-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;

      .category-img {
        img {
          width: 85%;
          height: 450px;
          border-radius: 10px;
        }
      }
      .item {
        .title {
          h2 {
            font-size: 46px;
            letter-spacing: 2px;
          }
          p {
            font-size: 16px;
            color: grey;
            margin-top: 25px;
            line-height: 140%;
            font-family: "Courier New", Courier, monospace;
          }
        }

        .galochka {
          margin-top: 30px;
          display: flex;
          align-items: center;
          gap: 15px;

          h3 {
            font-weight: 400;
            color: #0a0602;
          }
          .galochka-icon {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #57c1fa;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
        }

        .btn {
          button {
            padding: 15px 20px;
            border: none;
            background-color: #57c1fa;
            border-radius: 20px;
            color: #fff;
            font-size: 16px;
            margin-top: 30px;
          }
        }
      }
    }

    .doctor-position {
      background-color: #fff;
      opacity: 0.9;
      width: 30%;
      border-radius: 10px;
      position: absolute;
      bottom: 5%;
      left: 15%;
      z-index: 3444;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
        rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

      .title {
        padding: 30px;
        h4 {
          font-size: 20px;
          letter-spacing: 1px;
          font-weight: 500;
        }

        p {
          color: gray;
          font-size: 16px;
          margin-top: 15px;
        }

        .doctor-name {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 25px;

          h5 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 8px;
          }

          span {
            color: gray;
          }

          .doctor-svg {
            img {
              width: 50px;
              border-radius: 40px;
            }
          }
        }
      }

      .doctor-find {
        padding: 15px 10px;
        background-color: #57c1fa;
        border-radius: 30px;
        text-align: center;
        margin-top: 70px;
        a {
          text-decoration: none;
          font-weight: 500;
          color: #fff;
        }
      }
    }
  }
`;
