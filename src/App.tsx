import { Button } from "./components/Button";
import { InputFucnction } from "./components/Input";
import type { Input, ButtonProperties } from "./types/inputType";

function App() {
  const inputData: Input = {
    label: "firstname",
    value: "philemon",
    placeholder: "First Name",
    type: "text",
    name: "firstname",
  };

  const buttonData: ButtonProperties = {
    label: "submit",
    type: "submit",
  };

  return (
    <div>
      <InputFucnction input={inputData} />
      <Button buttonProp={buttonData} />
    </div>
  );
}

export default App;
