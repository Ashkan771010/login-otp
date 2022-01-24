import { useEffect, useRef } from "react";
import { Button } from "antd";
import { sendingIProps } from "../inerfaces";
import CountDownTimer from "../countdown-timer/CountDownTimer";

const elemRefs: any[] = [];


const autoTab = (e: any) => {
  const BACKSPACE_KEY = 8;
  const DELETE_KEY = 46;
  let tabindex = e.target.getAttribute("data-index") || 0;
  tabindex = Number(tabindex);
  let elem = null;
  if (e.keyCode === BACKSPACE_KEY) {
    elem = tabindex > 0 && elemRefs[tabindex - 1];
  } else if (e.keyCode !== DELETE_KEY) {
    elem = tabindex < elemRefs.length - 1 && elemRefs[tabindex + 1];
  }
  if (elem) {
    elem.current.focus();
  }
};

const SendingCode: React.FC<sendingIProps> = (props) => {
  const { setStatus, free, value } = props;
  const ref1: any = useRef();
  const ref2: any = useRef();
  const ref3: any = useRef();
  const ref4: any = useRef();

  useEffect(() => {
    if(elemRefs.length === 0) {
       elemRefs.push(ref1, ref2, ref3, ref4);
    }else {
        elemRefs.splice(0, 4, ref1, ref2, ref3, ref4);
        // console.log(elemRefs)
    }
  }, []);

  const handleChangeNumber = () => {
    setStatus(free);
  };
  const handleOnWheel = (e: any) => {
    e.target.blur();
  };
  return (
    <>
      <div className="send-code-conteiner">
        <p>
          کد به شماره <span>{value}</span> ارسال شد.
        </p>
        <Button className="change-phone-btn" onClick={handleChangeNumber}>
          تغییر شماره
        </Button>
      </div>
      <div className="input-container">
        <input
          className="block1"
          type="text"
          data-index="0"
          ref={ref1}
          maxLength={1}
          onWheelCapture={handleOnWheel}
          onKeyUp={autoTab}
        />
        <input
          className="block2"
          type="text"
          data-index="1"
          ref={ref2}
          maxLength={1}
          onWheelCapture={handleOnWheel}
          onKeyUp={autoTab}
        />
        <input
          className="block3"
          type="text"
          data-index="2"
          ref={ref3}
          maxLength={1}
          onWheelCapture={handleOnWheel}
          onKeyUp={autoTab}
        />
        <input
          className="block4"
          type="text"
          data-index="3"
          ref={ref4}
          maxLength={1}
          onWheelCapture={handleOnWheel}
          onKeyUp={autoTab}
        />
      </div>
      <CountDownTimer />
    </>
  );
};

export default SendingCode;
