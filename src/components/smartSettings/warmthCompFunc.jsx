import { useState, useEffect } from "react";
import { getDevices } from "../../fetches/api";

import TempSetting from "../../assets/icons/icon_temp-setting.png";
import Temp from "../../assets/icons/icon_temp.png";

export function WarmthCompFunc() {
  const [settingsState, setSettingsState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await getDevices();

            console.log("DEVICES:", devices);

        const formatted = devices.reduce((acc, device) => {
        const roomKey = device.id;
        
          acc[roomKey] = {
            title: `Varme i ${device.name}`,
           Heater: device.is_on ?? false,
            icon: Temp,
            warmth: `${device.current_temp}°C`,
            description: device.work_mode,
            icon2: TempSetting,
            link: "/settings",
          };

          return acc;
        }, {});

        setSettingsState(formatted);
      } catch (err) {
        console.error("Failed to fetch devices", err);
      }
    };

    fetchData();

  }, []);

  function toggleSetting(roomKey, deviceKey) {
    setSettingsState(prev => ({
      ...prev,
      [roomKey]: {
        ...prev[roomKey],
        [deviceKey]: !prev[roomKey][deviceKey],
      },
    }));
  }

  return { settingsState, toggleSetting };
}