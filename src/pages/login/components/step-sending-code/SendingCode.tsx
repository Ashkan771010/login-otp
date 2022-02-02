import { FormEvent, useEffect, useRef } from "react";
import { Button } from "antd";
import CountDownTimer from "../countdown-timer/CountDownTimer";
import { IProps } from "./interface";
import SendingCodeContainer from "./sending-code.style";

const elemRefs: any = [];

const autoTab = (e: any
  ) => {
  const BACKSPACE_KEY = 8;
  let tabindex = e.currentTarget.getAttribute("data-index") || 0;
  tabindex = Number(tabindex);
  let elem = null;
  if (tabindex === 0) {
    elem = true;
  } if (e.keyCode === BACKSPACE_KEY) {
    elem = tabindex > 0 && elemRefs[tabindex - 1];
  } else if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    (e.keyCode >= 96 && e.keyCode <= 105)
  ) {
    elem = tabindex < elemRefs.length - 1 && elemRefs[tabindex + 1];
  }
  if (elem) {
    elem.current.focus();
  }
};

const SendingCode: React.FC<IProps> = (props) => {
  const {
    setStatus,
    free,
    inputValue,
    isLoading,
    setIsLoading,
    handleCodeInput,
    codeInputs,
  } = props;
  
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (elemRefs.length === 0) {
      elemRefs.push(ref1, ref2, ref3, ref4);
    } else {
      elemRefs.splice(0, 4, ref1, ref2, ref3, ref4);
    }
  }, []);
  console.log(codeInputs)

  const handleChangeNumber = () => {
    setStatus(free);
  };
  const handleOnWheel = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.blur();
  };
  const handleOnInput = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.slice(0, 1);
  };
  return (
    <SendingCodeContainer>
      <div className="send-code-conteiner">
        <p>
          کد به شماره <span>{inputValue}</span> ارسال شد.
        </p>
        <Button
          className="change-phone-btn"
          onClick={handleChangeNumber}
          disabled={isLoading}
        >
          تغییر شماره
        </Button>
      </div>
      <div className="input-container">
        <input
          className="block1"
          type="number"
          data-index={0}
          autoFocus
          ref={ref1}
          value={codeInputs.input1}
          pattern="\d*"
          name="input1"
          disabled={isLoading}
          onChange={handleCodeInput}
          onWheelCapture={handleOnWheel}
          onKeyUp={autoTab}
          onInput={handleOnInput}
        />
        <input
          className="block2"
          type="number"
          data-index={1}
          ref={ref2}
          value={codeInputs.input2}
          pattern="\d*"
          name="input2"
          disabled={isLoading}
          onChange={handleCodeInput}
          onWheelCapture={handleOnWheel}
          onKeyUp={autoTab}
          onInput={handleOnInput}
        />
        <input
          className="block3"
          type="number"
          data-index={2}
          ref={ref3}
          value={codeInputs.input3}
          pattern="\d*"
          name="input3"
          disabled={isLoading}
          onChange={handleCodeInput}
          onWheelCapture={handleOnWheel}
          onKeyUp={autoTab}
          onInput={handleOnInput}
        />
        <input
          className="block4"
          type="number"
          data-index={3}
          ref={ref4}
          value={codeInputs.input4}
          pattern="\d*"
          name="input4"
          disabled={isLoading}
          onChange={handleCodeInput}
          onWheelCapture={handleOnWheel}
          onKeyUp={autoTab}
          onInput={handleOnInput}
        />
      </div>
      <CountDownTimer isLoading={isLoading} setIsLoading={setIsLoading} />
    </SendingCodeContainer>
  );
};

export default SendingCode;
