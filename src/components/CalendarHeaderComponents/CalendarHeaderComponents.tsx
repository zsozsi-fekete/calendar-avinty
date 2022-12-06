import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { TextField } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { ReactNode } from "react";
import { Direction } from "../../shared/types";
import styles from "./CalendarHeaderComponents.module.css";

export function CalendarHeaderContainer({ children }: { children: ReactNode }) {
  return <div className={styles.Container}>{children}</div>;
}

export function Arrow({
  direction,
  onClick,
}: {
  direction: Direction;
  onClick: () => void;
}) {
  return direction === Direction.Left ? (
    <ArrowLeftIcon
      fontSize="large"
      className={styles.Arrow}
      onClick={onClick}
    />
  ) : (
    <ArrowRightIcon
      fontSize="large"
      className={styles.Arrow}
      onClick={onClick}
    />
  );
}

export function DatePicker({
  value,
  handleChange,
}: {
  value: Dayjs | null;
  handleChange: (newValue: Dayjs | null) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Select a date"
        inputFormat="YYYY/MM/DD"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
