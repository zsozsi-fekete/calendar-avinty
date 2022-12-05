import styles from "./App.module.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { OPEN_WEATHER_MAP_API_KEY } from "./utils/constants";
import ApiKeyFormView from "./views/ApiKeyFormView";
import { CalendarView } from "./views/CalendarView";

function App() {
  const [apiKey, setApiKey] = useLocalStorage(OPEN_WEATHER_MAP_API_KEY);

  return (
    <div className={styles.App}>
      {apiKey ? (
        <CalendarView />
      ) : (
        <ApiKeyFormView setToLocalStorage={setApiKey} />
      )}
    </div>
  );
}

export default App;
