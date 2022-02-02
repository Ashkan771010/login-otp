import styled from "styled-components";

const SendingCodeContainer = styled.div`
    width: 100%;

  .send-code-conteiner {
    width: 100%;
    margin-top: 35px;
    display: flex;
    p {
      font-family: "VazirB";
      font-size: 16px;
      padding: 5px 15px;

      span {
        color: red;
      }
    }

    .change-phone-btn {
      border: 0;
      background-color: #e6e6e6;
      cursor: pointer;
      color: #31ba2d;
      font-family: "VazirB";
      font-size: 15px;
      margin-right: 20px;

      span {
        text-decoration: underline;
        text-decoration-color: #31ba2d;
      }
    }
  }

  .input-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    direction: ltr;

    input {
      width: 50px;
      height: 50px;
      background-color: #e6e6e6;
      text-align: center;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      border-bottom: 1px solid black;
      margin-right: 15px;
      font-family: "VazirB";
      font-size: 19px;
      -webkit-appearance: none;
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &:focus {
        outline: none;
        border-bottom: 1px solid #41e63c;
      }
    }
  }
`;

export default SendingCodeContainer;