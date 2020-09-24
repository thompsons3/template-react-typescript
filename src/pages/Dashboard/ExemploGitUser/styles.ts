import styled from "styled-components";
import PATTERNS_STYLES from "../../../styles";

export const Container = styled.div``;

export const Box = styled.div`
  background: #ffffff;
  border-radius: ${PATTERNS_STYLES.borderRadius};
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 400px;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 3px 4px 9px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 4px 9px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 4px 9px -4px rgba(0, 0, 0, 0.75);

  input {
    height: 50px;
    width: 100%;
    margin-bottom: 10px;
    border: 2px solid #999;
    border-radius: 4px;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 18px;

    &:focus {
      border-color: red;
    }
  }

  button {
    height: 50px;
    border: none;
    font-size: 18px;
    border-radius: 4px;
    outline: none;
    background: ${PATTERNS_STYLES.paletaCores.primary};
    color: #ffffff;
    margin-bottom: 10px;
    width: 100%;

    &:hover {
      background: ${PATTERNS_STYLES.paletaCores.primaryHover};
    }
  }

  span {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  img {
    border-radius: 50px;
    width: 70px;
    height: 70px;
  }
`;
