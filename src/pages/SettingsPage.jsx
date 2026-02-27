import { NavLink } from "react-router-dom"
import BackArrow from "../assets/icons/icon_left.png"


export default function SettingsPage(){
    return(
    <>
<NavLink to="/">
<img src={BackArrow} alt="" />
 </NavLink>

 <h1>Varme</h1>
    </>
    )
}