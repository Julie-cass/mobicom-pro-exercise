import React, { useState } from "react";

export function SmartSettingFunc(){

          const roomsData = {
                stuen: {
                    name: "Lys i Stuen",
                    devices: {
                        alt_lys: false,
                        loftlampe: false,
                        bordlampe_1: false,
                        bordlampe_2: false,
                    },
                },
                kokken: {
                    name: "Lys i Køkken",
                    devices: {
                        køkkenbord: false,
                        loftlampe: false,
                    },
                },
                indkorsel: {
                    name: "Lys i Indkørsel",
                    devices: {
                        udelys: false,
                        gangsti: false,
                        Altlys: false,
                    },
                },
            };

  const [roomsState, setRoomsState] = useState(roomsData);

  function toggleDevice(roomKey, deviceKey) {
    setRoomsState(prev => ({
      ...prev,
      [roomKey]: {
        ...prev[roomKey],
        devices: { ...prev[roomKey].devices, [deviceKey]: !prev[roomKey].devices[deviceKey] },
      },
    }));
  }

  return { roomsState, toggleDevice };
}