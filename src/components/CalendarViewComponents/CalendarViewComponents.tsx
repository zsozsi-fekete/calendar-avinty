import { ReactNode } from "react";
import styles from "./CalendarViewComponents.module.css";

export function CalendarViewHeader({
  apiKey,
  removeApiKey,
}: {
  apiKey: string;
  removeApiKey: () => void;
}) {
  return (
    <div className={styles.Header}>
      {`Api Key: ${apiKey} `}
      <button className={styles.Button} onClick={removeApiKey}>
        Remove
      </button>
    </div>
  );
}

export function CalendarViewContainer({ children }: { children: ReactNode }) {
  return <div className={styles.Container}>{children}</div>;
}
