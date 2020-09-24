import styled from "styled-components";
import PATTERNS_STYLES from "../../styles/index";

export const Container = styled.div`
  background: ${PATTERNS_STYLES.paletaCores.background};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;

  h1 {
    color: #bbb;
  }

  span {
    font-size: 20px;
    margin-top: 15px;
    color: #ccc;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  border: none;
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: ${PATTERNS_STYLES.borderRadius};
  background: ${PATTERNS_STYLES.paletaCores.primary};
  transition: all ease-out .2s;

  &:hover {
      background: ${PATTERNS_STYLES.paletaCores.primaryHover};
      padding-right: 25px;
      padding-left: 25px;
  }

  span {
      color: #FFF;
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
  }
`;
