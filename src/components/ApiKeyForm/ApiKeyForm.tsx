import styles from "./ApiKeyForm.module.css";

export function ApiKeyForm({
  inputValue,
  onChange,
  onSubmit,
}: {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <label className={styles.Label} htmlFor="api_key">
        Please provide an OpenWeatherMap API Key
      </label>
      <input
        id="api_key"
        name="api_key"
        className={styles.Input}
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <button type="submit" className={styles.Button}>
        Save
      </button>
    </form>
  );
}
