import Consumption from "../../assets/icons/icon_consumption_on.png";
import "./EnergyUse.scss"

export default function EnergyUse() {


    return (
        <>
            <section className="EnergyUseSec">
                <div id="shadow" className="EnergyUseDiv">
                    <div className="EnergyUseLeft">
                        <span className="EnergyUseIconSpan">
                            <img className="EnergyUseIcon" src={Consumption} alt="" />
                        </span>
                        <span className="EnergyUseDate">
                            <h4>21 jan 2026</h4>
                            
                        </span>
                    </div>

                    <div className="EnergyUseRight">
                        <p className="EnergyUseTxt1">29,3
                            <span className="EnergyUseKwh">
                                kWh
                            </span></p>
                        <p className="EnergyUseTxt2">23% mindre end i går</p>
                    </div>
                </div>
            </section>
        </>
    )
}