import {NavLink} from 'react-router-dom';

import "./NavMenu.css"

import ActiveDashboard from "../../assets/icons/icon_menu_dashboad_active.png"
import inActiveDashboard from "../../assets/icons/icon_menu_dashboad_inactive.png"


import ActiveStatistic from "../../assets/icons/icon_menu_statistics_active.png"
import inActiveStatistic from "../../assets/icons/icon_menu_statistics_inactive.png"

import HeatingIcon from "../../assets/icons/icon_menu_heating.png"
import LightIcon from "../../assets/icons/icon_menu_light.png"

export default function Navigation(){
    return(
    <>
<div className="navigationDiv">
<NavLink to="/">
 {({isActive})=>(
  <img src={isActive ? ActiveDashboard : inActiveDashboard} alt="Dashboard" />
   )}
    </NavLink>

<NavLink to="statistics">
 {({isActive})=>(
  <img src={isActive ? ActiveStatistic : inActiveStatistic} alt="Statistics" />
   )}
    </NavLink>

<NavLink to="error">

  <img src={HeatingIcon} alt="Statistics" />
 
    </NavLink>

<NavLink to="error">

  <img src={LightIcon} alt="Statistics" />
 
    </NavLink>

    </div>
    </>
    )
}