import styled from "styled-components";

export const Nav = styled.nav`
  .navigation {
    display: flex;
    align-items: center;
    gap: 20%;
    margin: 30px 0;
    .nav-logo {
      a {
        color: #000;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;

        span {
          color: #4287f5;
        }
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 25px;

      a {
        text-decoration: none;
        color: #1a212b;
        font-size: 17px;
        font-weight: 400;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
