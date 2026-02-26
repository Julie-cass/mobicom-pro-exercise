import SlidingToggle from "./SlidingToggle.jsx";
import { SmartSettingFunc } from "./SmartSeetingFunc.jsx";

import "./SmartSettingComp.scss"

export default function SmartLighting() {
    const { roomsState, toggleDevice } = SmartSettingFunc();

    return (
        <>
            <section className="SmartSetSec">
                <div className="SmartSetDiv">

                    {Object.entries(roomsState).map(([roomKey, room]) => (
                        <div id="shadow" className="SmartSetCompBox" key={roomKey}>
                            <h3 className="SmartSetCompTitle">{room.name}</h3>


                            {Object.entries(room.devices).map(([deviceKey, isOn]) => (
                                <label key={deviceKey} className="deviceRow">
                                    <span className="deviceName">
                                        {deviceKey.replace(/_/g, " ")}
                                    </span>

                                    <SlidingToggle isOn={isOn} roomKey={roomKey} deviceKey={deviceKey} toggleDevice={toggleDevice} />
                                </label>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}