import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { ReactNode } from "react";
import styles from "./CalendarHeaderComponents.module.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Direction } from "../../shared/types";

export function CalendarHeaderContainer({ children }: { children: ReactNode }) {
  return <div className={styles.Container}>{children}</div>;
}

export function Arrow({
  direction,
  onClick,
}: {
  direction: Direction;
  onClick: (direction: number) => void;
}) {
  return direction === Direction.Left ? (
    <ArrowLeftIcon
      fontSize="large"
      className={styles.Arrow}
      onClick={() => onClick(-1)}
    />
  ) : (
    <ArrowRightIcon
      fontSize="large"
      className={styles.Arrow}
      onClick={() => onClick(1)}
    />
  );
}
