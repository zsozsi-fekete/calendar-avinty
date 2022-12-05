export function CalendarView({
  apiKey,
  removeApiKey,
}: {
  apiKey: string;
  removeApiKey: () => void;
}) {
  return (
    <div>
      Calendar: {apiKey}
      <button onClick={removeApiKey}>Remove</button>
    </div>
  );
}
