import { useState } from "react";
import Card from "../../components/Card";
import styles from "./ApiKeyFormView.module.css";

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
  console.log("helo");
  return (
    <Card>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label className={styles.Label} htmlFor="api_key">
          Please provide an OpenWeatherMap API Key
        </label>
        <input
          id="api_key"
          name="api_key"
          className={styles.Input}
          type="text"
          value={apiKey}
          onChange={(event) => setApiKey(event.target.value)}
        />
        <button type="submit" className={styles.Button}>
          Save
        </button>
      </form>
    </Card>
  );
}
