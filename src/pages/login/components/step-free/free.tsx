import { ChangeEvent, FormEvent } from "react";
import { freeIProps } from "../inerfaces";

const Free: React.FC<freeIProps> = (props) => {
    let { value, setValue } = props;
    const handleOnChnage = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleOnWheel = (e: FormEvent<HTMLInputElement>) => {
        e.currentTarget.blur();
    }

    return (
      <>
        <p className="login-title">لطفا شماره موبایل خود را وارد نمایید.</p>
        <input
          type="number"
          className="phone-number"
          value={value}
          onWheelCapture={handleOnWheel}
          onChange={handleOnChnage}
          onInput={(e: FormEvent<HTMLInputElement>) => (e.currentTarget.value = e.currentTarget.value.slice(0, 11))}
        />
      </>
    );
}

export default Free;