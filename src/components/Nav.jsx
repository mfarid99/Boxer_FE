import React from "react"
import {Link} from "react-router-dom"
import {useAppData, useAppState} from "../AppState.jsx"

const Nav = (props) => {
    const {state, dispatch} = useAppState()
    return (
    
    <header>
        <div > 
        <nav>
            {!state.token ? (<><Link to="/"> <div>Home</div></Link>
            <Link to="/auth/signup"> <div>Signup</div></Link>
            <Link to="/auth/login"> <div>Login</div></Link></>) : null}
            {state.token ? <div onClick={()=> {
                dispatch({type: "logout"})
                props.history.push("/")
            }}>Logout</div> : null}

        </nav>
        

        </div>
        
    </header>
    
    )}

export default Nav