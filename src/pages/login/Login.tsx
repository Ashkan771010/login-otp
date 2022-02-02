import { useState } from "react";
import { CheckMobileNumber } from "../../utils/check-mobile";
import { LoginSteps } from "./login-constant";
import LoginContainer from "./login.style";
import BrandLogo from "../../assets/images/Brand.png";
import { Button } from "antd";
import SendingCode from "./components/step-sending-code/SendingCode";
import Free from "./components/step-free/Free";
import { notification } from "antd";
import { MainAlert } from "./login.style";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  const { auth, setAuth } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(LoginSteps.free);
  const [inputValue, setInputValue] = useState("");
  const [codeInputs, setCodeInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const navigate = useNavigate();

  const handleCodeInput = (e: any) => {
    const value = e.target.value;
    setCodeInputs({
      ...codeInputs,
      [e.target.name]: value,
    });
  };

  const handleStatus = () => {
    if(status === LoginSteps.sendingCode) {
      setIsLoading(false)
    }
    setIsLoading(true);
    setTimeout(() => {
      setStatus(LoginSteps.sendingCode);
      setIsLoading(false);
    }, 5000);
  };

  const handleOnClick = () => {
    if (status === LoginSteps.sendingCode) {
      // setIsLoading(false)
      if (
        codeInputs.input1.length > 0 &&
        codeInputs.input2.length > 0 &&
        codeInputs.input3.length > 0 &&
        codeInputs.input4.length > 0
      ) {
        setTimeout(() => {
          navigate("/home");
          setAuth(true);
        }, 3000)
      }else {
         notification.open({
           message: (
             <MainAlert
               message="لطفا کد را درست وارد نمایید."
               type="error"
               showIcon
             />
           ),
           duration: 3,
         });
      }
    }
    if (CheckMobileNumber(inputValue)) {
      handleStatus();
    } else {
      notification.open({
        message: (
          <MainAlert
            message="لطفا شماره موبایل خود را درست وارد نمایید."
            type="error"
            showIcon
          />
        ),
        duration: 3,
      });
    }
  };

  return (
    <LoginContainer Cursor={isLoading}>
      <div className="login-wrraper">
        <div className="image-container">
          <img src={BrandLogo} alt="Company Logo" />
        </div>
        {status === LoginSteps.free ? (
          <Free
            value={inputValue}
            setValue={setInputValue}
            isLoading={isLoading}
          />
        ) : (
          <SendingCode
            setStatus={setStatus}
            free={LoginSteps.free}
            inputValue={inputValue}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            handleCodeInput={handleCodeInput}
            codeInputs={codeInputs}
          />
        )}
        <Button
          onClick={handleOnClick}
          loading={isLoading}
          disabled={isLoading}
          className="send-btn"
        >
          {status === LoginSteps.free ? "ارسال کد" : "ورود"}
        </Button>
      </div>
    </LoginContainer>
  );
};

export default Login;
