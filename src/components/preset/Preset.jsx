import "./Preset.scss";
import { useRef, useState } from "react";

//icons
//on

import homeOn from "../../assets/icons/icon_home_on.png";
import awayOn from "../../assets/icons/icon_away_on.png";
import sleepOn from "../../assets/icons/icon_sleep_on.png";

//off
import homeOff from "../../assets/icons/icon_home_off.png";
import awayOff from "../../assets/icons/icon_away_off.png";
import sleepOff from "../../assets/icons/icon_sleep_off.png";



export default function PresetScroll() {
  const scrollRef = useRef(null);
  const [activePreset, setActivePreset] = useState(null);
const presets = [
  { name: "Hjemme", onIcon: homeOn, offIcon: homeOff },
  { name: "Ude", onIcon: awayOn, offIcon: awayOff },
  { name: "Sover", onIcon: sleepOn, offIcon: sleepOff }
];

  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="PresetScrollSec" ref={scrollRef} onWheel={handleWheel}>
  {presets.map((p, index) => (
    <div className="PresetDivBox" key={index}>
      <button id="shadow" 
        className={activePreset === index ? "active" : ""}
        onClick={() => setActivePreset(index)}
      >
        <div className="contentBtnDiv">
        <img
          src={activePreset === index ? p.onIcon : p.offIcon}
          alt={p.name} className="preset-icon"/>
        <p>{p.name}</p>
        </div>
      </button>
    </div>
  ))}
</section>
  );
}