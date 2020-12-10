import React from "react"
import {useAppState} from "../AppState.jsx"
import {Route, Link} from "react-router-dom"
import Form from "../components/Form.jsx"

const Dashboard = (props) => {

    const {state, dispatch} = useAppState()
    const {token, url, fighters, username} = state 

    const getFighters = async () => {
        const response = await fetch(url+ "/fighters/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const fetchedFighters = await response.json()
        dispatch({type: "getFighters", payload: fetchedFighters})

    }

    React.useEffect(()=> {getFighters()}, [])

    const loaded = () => (
        <div className ="dashboard"> 
        <h1>{username}'s Fighters</h1>
        <h2>Create Your Top 10 Greatest Boxers List</h2>
        <Link to="/dashboard/new"><button>New Fighter</button></Link>
        <Route path="/dashboard/:action" render={(rp)=> <Form {...rp} getFighters={getFighters}/>}/>

        <ul>
            {state.fighters.map((fighter) => ( 
                <div className="fighter" key={fighter.id}>
                <h2><img className="fighterphoto"src = {fighter.photo}/> </h2>
                <div className="info"> 
                    <h2 id="name">Name: {fighter.name}</h2>
                    <h2 id="weight">Weight Class: {fighter.weightclass}</h2>
                    <h2 id="wins">Wins: {fighter.wins}</h2>
                    <h2 id="losses">Losses: {fighter.losses}</h2>
                    <h2 id="titles">Titles: {fighter.titles}</h2>
                    <h2 id="about">About: {fighter.about}</h2>
                    </div>

                    <div className="btn"> 
                    <button id="editbtn" onClick={() => {
                        dispatch({type: "select", payload: fighter})
                        props.history.push("/dashboard/edit")
                    }}>Edit Fighter</button>

                    <button id="deletebtn" onClick={() => {
                       fetch(url + "/fighters/" + fighter.id, {
                           method: "delete", 
                           headers: {
                               Authorization: "bearer " + token
                           }
                       })
                       .then(()=> getFighters())
                        }}>Delete Fighter</button>

                </div>
                </div>
            ))}
        </ul>

        </div> 
    )

    return fighters ? loaded() : <h1>loading...</h1>
}

export default Dashboard