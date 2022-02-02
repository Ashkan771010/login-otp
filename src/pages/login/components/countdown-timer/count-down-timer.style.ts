import styled from "styled-components";

interface IProps {
  resendBtnVisibility: boolean;
  Cursor: boolean
}

export const CountDownContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 70px;

  .resend-code {
    p {
      font-family: "VazirB";
      font-size: 15px;

      span {
        width: 37px;
        height: 38px;
        display: inline-block;
        background-color: rgba(65, 230, 60, 0.5);
        border-radius: 50%;
        padding: 8px 6px;
        vertical-align: middle;
        margin-right: 4px;
        font-size: 15px;
        opacity: ${(props: IProps) => (props.resendBtnVisibility ? "0" : "1")};
        visibility: ${(props: IProps) =>
          props.resendBtnVisibility ? "hidden" : "visible"};
      }
    }
  }

  .resend-btn {
    font-family: "VazirB";
    border-radius: 5px;
    border: 1px solid #41e63c;
    color: #41e63c;
    margin-top: 3px;
    opacity: ${(props: IProps) => (props.resendBtnVisibility ? "1" : "0")};
    visibility: ${(props: IProps) =>
      props.resendBtnVisibility ? "visible" : "hidden"};
    direction: ltr;
    pointer-events: ${(props: IProps) => (props.Cursor ? "none" : "auto")};

    &:hover {
      background-color: #41e63c;
      color: white;
    }
  }
`;
