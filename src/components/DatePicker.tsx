import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

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
