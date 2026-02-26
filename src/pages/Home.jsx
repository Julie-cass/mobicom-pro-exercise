
import react, { useState } from "react";


import EnergyUse from "../components/EnergyUse/EnergyUse";
import PresetScroll from "../components/preset/Preset";
import RoomScroll from "../components/Rooms.jsx/RoomScroll";
import SmartLighting from "../components/smartSettings/SmartSettingComp";

import DropDown from "../assets/icons/icon_drop-down.png"


export default function HomePage() {
    const [activePreset, setActivePreset] = useState(null);
    return (
        <>
            <section>

                <div>
                    <h2>Energi Forbrug</h2>
                    <EnergyUse />

                    <div>
                        <h2>Rum</h2>
                        <p>Vis alle <img src={DropDown} alt="" /></p>
                    </div>
                    <RoomScroll />

                    <h2>Forudinstillet</h2>

                    <PresetScroll
                        activePreset={activePreset}
                        setActivePreset={setActivePreset} />

                    {activePreset === 0 && <SmartLighting />}
                </div>
            </section>
        </>
    )
}
