import styled from "styled-components";
import { Alert } from "antd";

interface IProps {
  Cursor: boolean
}

export const MainAlert = styled(Alert)`
  font-family: "IRANSansB";
  padding: 8px 0;

  .ant-alert-message {
    margin-right: 8px;
  }
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-wrraper {
    width: 400px;
    /* height: 400px; */
    margin: auto auto;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
    border-radius: 5px;
    padding-bottom: 20px;
  }

  .image-container {
    width: 30%;
    margin-top: 20px;
    img {
      width: 100%;
      max-height: 100%;
    }
  }

  .login-title {
    font-family: "IRANSansB";
    font-size: 16px;
    margin-top: 40px;
  }

  .phone-number {
    width: 70%;
    height: 35px;
    margin-top: 25px;
    border-radius: 5px;
    border: 1px solid lightgray;
    direction: ltr;
    padding: 2px 0 2px 8px;
    font-family: "IRANSansB";

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
      border: 1px solid #41e63c;
      box-shadow: 0 0 10px rgba(65, 230, 60, 0.7);
    }
  }

  .send-btn {
    background-color: white;
    margin-top: 50px;
    border: 1px solid #41e63c;
    width: 70%;
    padding: 3px 0;
    font-family: "IRANSansB";
    border-radius: 5px;
    color: #41e63c;
    transition: all 0.4s ease;
    font-size: 15px;
    cursor: ${(props: IProps) => (props.Cursor ? "default" : "pointer")};
    direction: ltr;
    pointer-events: ${(props: IProps) => (props.Cursor ? "none" : "auto")};

    &:hover {
      background-color: #41e63c;
      color: white;
    }
  }

  .send-code-conteiner {
    width: 90%;
    margin-top: 38px;
    display: flex;
    p {
      font-family: "IRANSansB";
      padding: 5px 0;

      span {
        color: red;
      }
    }

    .change-phone-btn {
      border: 0;
      background-color: #e6e6e6;
      cursor: pointer;
      color: #31ba2d;
      font-family: "IRANSans";
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
      font-family: "IRANSansB";
      font-size: 18px;
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

export default LoginContainer;
