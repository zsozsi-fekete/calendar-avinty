import styles from "./App.module.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { OPEN_WEATHER_MAP_API_KEY } from "./utils/constants";

function App() {
  const [apiKey, setApiKey] = useLocalStorage(OPEN_WEATHER_MAP_API_KEY);

  return (
    <div className={styles.App}>
      {apiKey ? <div>Calendar</div> : <input type="text" />}
    </div>
  );
}

export default App;
