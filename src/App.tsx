import styles from "./App.module.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { OPEN_WEATHER_MAP_API_KEY } from "./utils/constants";
import { ApiKeyInputView } from "./views/ApiKeyInputView";
import { CalendarView } from "./views/CalendarView";

function App() {
  const [apiKey, setApiKey] = useLocalStorage(OPEN_WEATHER_MAP_API_KEY);

  return (
    <div className={styles.App}>
      {apiKey ? <CalendarView /> : <ApiKeyInputView setApiKey={setApiKey} />}
    </div>
  );
}

export default App;
