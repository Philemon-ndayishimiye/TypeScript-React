import React from "react";
import { Button } from "./components/Button";
import { InputFucnction } from "./components/Input";
import type { Input, ButtonProperties, FormError } from "./types/inputType";

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState<FormError>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });

    const formError: FormError = {};

    if (!formData.email) {
      formError.email = "enter  email";
    }

    if (!formData.password) {
      formError.password = "enter passowrd";
    }

    if (Object.entries(formError).length > 0) {
      setError(formError);
    }
  };

  const inputEmail: Input = {
    label: "Email",
    value: formData.email,
    placeholder: "Email",
    type: "email",
    name: "email",
    onChange: handleChange,
  };

  const inputPassword: Input = {
    label: "Password",
    value: formData.password,
    placeholder: "password",
    type: "password",
    name: "password",
    onChange: handleChange,
  };

  const buttonData: ButtonProperties = {
    label: "submit",
    type: "submit",
    onClick: handleClick,
  };

  return (
    <div>
      <InputFucnction input={inputEmail} />
      {error.email && <span className="text-red-500">{error.email}</span>}
      <InputFucnction input={inputPassword} />
      <Button buttonProp={buttonData} />
      {error.password && <span className="text-red-500">{error.password}</span>}
    </div>
  );
}

export default App;
