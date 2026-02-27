import { useNavigate } from "react-router-dom";
import { WarmthCompFunc } from "./warmthCompFunc";
import SlidingToggle from "./SlidingToggle";


export default function WarmthComp() {
  const { settingsState, toggleSetting } = WarmthCompFunc();
  const navigate = useNavigate();


  return (
    <>
      <section className="WarmthSetSec">
        <div>

          {Object.entries(settingsState).map(([roomKey, setting]) => (
            <div className="WarmthInfoBox" key={roomKey}>

              <h3>{setting.title}</h3>

              {Object.entries(setting).filter(([propKey, value]) => typeof value === "boolean").map(([deviceKey, isOn]) => (
                <label key={deviceKey} className="deviceRow">
                  <span className="deviceName">
                    {deviceKey.replace(/_/g, " ")}
                  </span>

                  <SlidingToggle isOn={isOn} roomKey={roomKey} deviceKey={deviceKey} toggleDevice={(roomKey, deviceKey) => toggleSetting(roomKey, deviceKey)
                  }
                  />
                </label>
              ))}


              <div className="SettingDesComp">
                <img src={setting.icon} alt={setting.title} />

<div className="WamthTxtInfo">
                <p>{setting.warmth}</p>
                <p>{setting.description}</p>
                </div>
              </div>

              <button className="WarmthBtn" onClick={() => navigate(setting.link)}>
                <img src={setting.icon2} alt="" />
               <p>Indstillinger</p>
              </button>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}