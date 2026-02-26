import EnergyUse from "../components/EnergyUse/EnergyUse";
import PresetScroll from "../components/preset/Preset";
import RoomScroll from "../components/Rooms.jsx/RoomScroll";


export default function HomePage() {

    return (
        <>
            <div>
<h2>Energi Forbrug</h2>
<EnergyUse />

                <div>
                    <h2>Rum</h2>
                    <p>Vis alle</p>
                </div>
                <RoomScroll />

      <h2>Forudinstillet</h2>

                <PresetScroll />

            </div>
        </>
    )
}
