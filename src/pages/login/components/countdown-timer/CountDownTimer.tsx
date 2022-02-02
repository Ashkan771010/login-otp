import { Button } from "antd";
import { useEffect, useState } from "react";
import { CountDownContainer } from "./count-down-timer.style";
import { IProps } from "./interface";

const CountDownTimer: React.FC<IProps> = (props) => {
  const { isLoading, setIsLoading } = props;
  const [minutes, setMinutes] = useState<number>(2);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes]);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMinutes(2);
      setSeconds(0);
    }, 3000);
  };

  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const resendBtnVisibility = minutes === 0 && seconds === 0 ? true : false;
  return (
    <CountDownContainer
      resendBtnVisibility={resendBtnVisibility}
      Cursor={isLoading}
    >
      <div className="resend-code">
        <p>
          ارسال مجدد کد بعد از
          <span>
            {minutes}:{timerSeconds}
          </span>
        </p>
      </div>
      <Button className="resend-btn" onClick={handleClick} loading={isLoading}>
        ارسال مجدد
      </Button>
    </CountDownContainer>
  );
};

export default CountDownTimer;
