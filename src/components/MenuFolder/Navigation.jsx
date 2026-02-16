import {NavLink} from 'react-router-dom';

export default function Navigation(){
    return(
    <>

<NavLink to="/"
 className={({isActive})=>(isActive ? 'active' :'inactive')}
    >
bonk
    </NavLink>

    </>
    )
}