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
      font-family: "IRANSansB";

      span {
        background-color: rgba(65, 230, 60, 0.5);
        border-radius: 50%;
        padding: 8px 5px 6px 4px;
        vertical-align: middle;
        margin-right: 4px;
      }
    }
  }

  .resend-btn {
    font-family: "IRANSansB";
    border-radius: 5px;
    border: 1px solid #41e63c;
    color: #41e63c;
    margin-top: -4px;
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
