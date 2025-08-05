export interface Input {
  label?: string;
  name: string;
  placeholder: string;
  type: string;
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProperties {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
