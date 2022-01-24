import { freeIProps } from "../inerfaces";

const Free: React.FC<freeIProps> = (props) => {
    const { value, setValue } = props;
    const handleOnChnage = (e: any) => {
        setValue(e.target.value)
    }
    const handleOnWheel = (e: any) => {
        e.target.blur();
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
        />
      </>
    );
}

export default Free;