import { useRef, useState } from "react";

export function useFetch<T>() {
  const [data, setData] = useState<T>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const abortController = useRef(new AbortController());

  const startFetch = (url: string) => {
    setLoading(true);
    fetch(url, { signal: abortController.current.signal })
      .then((response) => response.json())
      .then((data) => data as T)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const abort = () => abortController.current.abort();

  return { data, error, loading, startFetch, abort };
}
