export interface freeIProps {
  value: string;
  setValue: (value: string) => void;
}

export interface sendingIProps {
  setStatus: (status: number) => void;
  free: number;
  value: string;
}