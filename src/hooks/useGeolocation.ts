import { useEffect, useState } from "react";

export function useGeolocation() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState<GeolocationPosition>();

  const success = (pos: GeolocationPosition) => {
    console.log(pos);
    setPosition(pos);
    setEnabled(true);
  };
  const error = (err: GeolocationPositionError) => setEnabled(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setEnabled(false);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return {
    enabled,
    position,
  };
}
