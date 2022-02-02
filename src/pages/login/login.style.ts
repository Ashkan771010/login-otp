import styled from "styled-components";
import { Alert } from "antd";

interface IProps {
  Cursor: boolean
}

export const MainAlert = styled(Alert)`
  font-family: "VazirB";
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

  .send-btn {
    background-color: white;
    margin-top: 30px;
    border: 1px solid #41e63c;
    width: 70%;
    padding: 3px 0;
    font-family: "VazirB";
    border-radius: 5px;
    color: #41e63c;
    transition: all 0.4s ease;
    font-size: 16px;
    cursor: ${(props: IProps) => (props.Cursor ? "default" : "pointer")};
    direction: ltr;
    pointer-events: ${(props: IProps) => (props.Cursor ? "none" : "auto")};

    &:hover {
      background-color: #41e63c;
      color: white;
    }
  }

`;

export default LoginContainer;
