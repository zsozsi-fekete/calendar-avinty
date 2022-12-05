import { ReactNode } from "react";
import styles from "./Card.module.css";

export function Card({ children }: { children: ReactNode }) {
  return <div className={styles.Card}>{children}</div>;
}
