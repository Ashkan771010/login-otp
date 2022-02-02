

export interface IProps {
  setStatus: (status: number) => void;
  free: number;
  inputValue: string;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  handleCodeInput: (e: any) => void;
  codeInputs: {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
  };
}
