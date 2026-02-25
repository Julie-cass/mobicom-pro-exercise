import { useEffect, useState } from "react";
import { getDevices } from "../fetches/devices";

export default function Devices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDevices().then(setDevices).catch(console.error);
  }, []);

  return (
    <div>
      {devices.map((device) => (
        <div key={device.id}>
          <h3>{device.name}</h3>
          <p>Current: {device.current_temp}°C</p>
          <p>Target: {device.target_temp}°C</p>
          <p>Vent: {device.vent_level}</p>
          <p>Mode: {device.work_mode}</p>
        </div>
      ))}
    </div>
  );
}