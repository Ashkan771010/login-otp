import { ChangeEvent, FormEvent } from "react";
import FreeContainer from "./free.style";
import { IProps } from "./interface";

const Free: React.FC<IProps> = (props) => {
    let { value, setValue, isLoading } = props;
    const handleOnChnage = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleOnWheel = (e: FormEvent<HTMLInputElement>) => {
        e.currentTarget.blur();
    }
    console.log(document.activeElement)
    return (
      <FreeContainer>
        <p className="login-title">لطفا شماره موبایل خود را وارد نمایید.</p>
        <input
          type="number"
          className="phone-number"
          disabled={isLoading}
          pattern="\d*"
          value={value}
          autoFocus
          onWheelCapture={handleOnWheel}
          onChange={handleOnChnage}
          onInput={(e: FormEvent<HTMLInputElement>) =>
            (e.currentTarget.value = e.currentTarget.value.slice(0, 11))
          }
        />
      </FreeContainer>
    );
}

export default Free;