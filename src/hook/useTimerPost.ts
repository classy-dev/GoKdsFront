import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

function useTimer(orderedAt: any) {
  const [showTime, setShowTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const startTime = dayjs(orderedAt);
      const endTime = dayjs();
      const duration = dayjs.duration(endTime.diff(startTime));

      const hours = Math.floor(duration.asHours());
      const minutes = Math.floor(duration.asMinutes()) % 60;
      const seconds = Math.floor(duration.asSeconds()) % 60;

      const formattedTime = hours
        ? `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      setShowTime(formattedTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [orderedAt]);

  return { showTime };
}

export default useTimer;
