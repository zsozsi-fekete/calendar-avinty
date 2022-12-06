import { useState } from "react";
import ApiKeyForm from "../components/ApiKeyForm";
import Card from "../components/Card";

export function ApiKeyFormView({
  setToLocalStorage,
}: {
  setToLocalStorage: (value: string) => void;
}) {
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToLocalStorage(apiKey);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setApiKey(event.target.value);

  return (
    <Card>
      <ApiKeyForm
        inputValue={apiKey}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </Card>
  );
}
