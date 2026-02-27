import Consumption from "../../assets/icons/icon_consumption_on.png";
import "./EnergyUse.scss"
import { NavLink } from "react-router-dom";

export default function EnergyUse() {


    return (
        <>
            <section className="EnergyUseSec">
                <div id="shadow" className="EnergyUseDiv">
                    <div className="EnergyUseLeft">
                        <NavLink to="statistics" className="EnergyUseIconSpan">
                            <img className="EnergyUseIcon" src={Consumption} alt="" />
                        </NavLink>
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