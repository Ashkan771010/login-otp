import styled from "styled-components";

const FreeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  .login-title {
    font-family: "VazirB";
    font-size: 17px;
    margin-top: 40px;
  }

  .phone-number {
    width: 70%;
    height: 35px;
    margin-top: 25px;
    margin-bottom: 40px;
    border-radius: 5px;
    border: 1px solid lightgray;
    direction: ltr;
    padding: 2px 0 2px 8px;
    font-family: "VazirB";
    letter-spacing: 3px;
    font-size: 16px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
      border: 1px solid #41e63c;
      box-shadow: 0 0 10px rgba(65, 230, 60, 0.7);
    }
  }
`;

export default FreeContainer;