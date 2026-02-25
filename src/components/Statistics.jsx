import { useEffect, useState } from "react";
import { getStatistics } from "../fetches/statistics";

export default function Statistics({ deviceId }) {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getStatistics(deviceId)
      .then(setStats)
      .catch(console.error);
  }, [deviceId]);

  return (
    <div>
      <h3>Energy Usage</h3>
      {stats.map((entry) => (
        <div key={entry.date}>
          <p>{entry.date}</p>
          <p>{entry.kwh_usage} kWh</p>
          <p>{entry.total_price} {entry.currency}</p>
        </div>
      ))}
    </div>
  );
}