import React, { useState } from "react";


import TempSetting from "../../assets/icons/icon_temp-setting.png"
import Temp from "../../assets/icons/icon_temp.png"


export function WarmthCompFunc() {

  const settingsData = {
    livingroom: {
      title: "Varme i Stuen",
      Fan_Coil: false,
      icon: Temp,
      warmth: "21C",
      description: "Tidsplan - mode",
      icon2: TempSetting,
      link: "/settings",
    },
    bedroom: {
      title: "Varme i Soveværelse",
      Radiator: false,
      icon: Temp,
      warmth: "21C",
      description: "Tidsplan - mode",
      icon2: TempSetting,
      link: "/settings",
    },
    bathroom: {
      title: "Varme i Badeværelse",
      Gulvvarme: false,
      icon: Temp,
      warmth: "21C",
      description: "Tidsplan - mode",
      icon2: TempSetting,
      link: "/settings",
    },
  };

  const [settingsState, setSettingsState] = useState(settingsData);

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