
import react, { useState } from "react";


import EnergyUse from "../components/EnergyUse/EnergyUse";
import PresetScroll from "../components/preset/Preset";
import RoomScroll from "../components/Rooms.jsx/RoomScroll";
import SmartLighting from "../components/smartSettings/SmartSettingComp";

import DropDown from "../assets/icons/icon_drop-down.png"
import WarmthComp from "../components/smartSettings/WarmthComponent";

import "../PageScss/Home.scss"

export default function HomePage() {
    const [activePreset, setActivePreset] = useState(null);
    const [activeWarmth, setActiveWarmth] = useState(null);

    return (
        <>
            <section className="HomePageContainer">
                <h1>Smart Home</h1>
                <div>
                    <h2>Energi Forbrug</h2>
                    <EnergyUse />

                    <div className="RoomTitleBox">
                        <h2>Rum</h2>
                        <p>Vis alle <img src={DropDown} alt="" /></p>
                    </div>
                    <RoomScroll />


                    <h2>Forudinstillet</h2>
                    <PresetScroll activePreset={activePreset} setActivePreset={setActivePreset} />


                        <h2>Smart indstillinger</h2>
                    <div className="SmartSettingsContainer">
                        {activePreset === 0 && (
                            <div className="smartRow">
                                <SmartLighting />
                                <WarmthComp />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
