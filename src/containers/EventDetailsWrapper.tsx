import dayjs from "dayjs";
import {
  EventDetails,
  EventInfoContainer,
  EventWeatherDetails,
} from "../components/EventInfoComponents";
import {
  EventWeatherError,
  EventWeatherNotice,
} from "../components/EventInfoComponents/EventInfoComponents";
import { useOpenWeatherApi } from "../hooks/useOpenWeatherApi";

import { Event, WeatherData, WeatherForecastData } from "../shared/types";
import { getWeatherData, isInTheNextFiveDays } from "../utils/helpers";

export function EventDetailsWrapper({ event }: { event: Event }) {
  const startDate = dayjs(event.start);
  const endDate = dayjs(event.end);
  const { loading, data, error } = useOpenWeatherApi(
    event.start,
    event.location
  );

  const isTodaysWeatherData = !isInTheNextFiveDays(event.start);
  const weatherData = isTodaysWeatherData
    ? (data as WeatherData)
    : getWeatherData((data as WeatherForecastData)?.list, event.start);

  return (
    <EventInfoContainer key={event.id}>
      <EventDetails
        title={event.title}
        time={`${startDate.format("HH:mm")} - ${endDate.format("HH:mm")}`}
      />
      {error ? (
        <EventWeatherError error={error} />
      ) : (
        weatherData && (
          <>
            <EventWeatherNotice
              date={(isTodaysWeatherData ? dayjs() : startDate).format(
                "YYYY-MM-DD"
              )}
              isTodaysWeatherData={isTodaysWeatherData}
            />
            <EventWeatherDetails weatherData={weatherData} />
          </>
        )
      )}
    </EventInfoContainer>
  );
}
