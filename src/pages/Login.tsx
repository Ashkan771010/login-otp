import { useState } from "react";
import LoginContainer from "./login.style";
import BrandLogo from "../assets/images/Brand.png";
import { Button } from "antd";
import SendingCode from "./components/step-sending-code/sending-code";
import Free from "./components/step-free/free";
import { notification } from "antd";
import { MainAlert } from "./login.style";
import "antd/dist/antd.css";

const Login = () => {
  const steps = {
    free: 0,
    sendingCode: 1,
  };
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(steps.free);
  const [value, setValue] = useState("");
  const regex = /^09[0|1|2|3|9][0-9]{8}$/;

  const handleStatus = () => {
    setStatus(steps.sendingCode);
    setIsLoading(false)
  }

  const handleOnClick = () => {
    if (value.match(regex)) {
      setIsLoading(true)
      setTimeout(handleStatus, 5000);
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
        {status === steps.free ? (
          <Free value={value} setValue={setValue} />
        ) : (
          <SendingCode setStatus={setStatus} free={steps.free} value={value} />
        )}
        <Button onClick={handleOnClick} loading={isLoading} disabled={isLoading ? true : false} className="send-btn">
          {status === steps.free ? "ارسال کد" : "ورود"}
        </Button>
      </div>
    </LoginContainer>
  );
};

export default Login;
