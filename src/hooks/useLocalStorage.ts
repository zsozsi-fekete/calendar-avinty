import { useEffect, useState } from "react";

export function useLocalStorage(key: string) {
  const [storedValue, setStoredValue] = useState("");

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setStoredValue(item);
      }
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
