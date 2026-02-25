import {NavLink} from 'react-router-dom';


export default function ErrorPage(){
    return(
        <>
        <h1>this page does not exist</h1>
        <p>to go back to dashboard press here</p>
        <NavLink to="/">back to dashboard</NavLink>
        </>
    )
}