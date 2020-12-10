import React from "react";
import {useAppState} from "../AppState.jsx"; 

const Form = (props) => {
    const {state, dispatch} = useAppState();
    const {token} = state
    const action = props.match.params.action
    const [formData, setFormData] = React.useState(state[action])

    const actions = {
        new: () => {
            return fetch(state.url + "/fighters", {
                method: "post", 
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "bearer " + token

                },
                body: JSON.stringify(formData),
            }).then((response)=> response.json());
            },
            edit: () => {
                return fetch(state.url + "/fighters/" + state.edit.id, { 
                    method: "put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "bearer " + token

                    },
                    body: JSON.stringify(formData),
                }).then((response)=> response.json());
            },
        };

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        actions[action]().then((data)=> {
            props.getFighters()
            props.history.push("/dashboard/")
        });
    }



    
    return (
    <div className="form">
        <form onSubmit={handleSubmit}>
        <input type="text" name = "photo" value = {formData.photo} Placeholder = "Image URL" onChange={handleChange}/>
            <input type="text" name="name" Placeholder = "Name" value= {formData.name} onChange={handleChange}/>

            <input type="text" name="weightclass" Placeholder = "Weight Class" value={formData.weightclass} onChange={handleChange}/>
            <input type="text" name="wins" Placeholder = "Wins" value={formData.wins} onChange={handleChange}/>
            <input type="text" name="losses" Placeholder = "Losses" value={formData.losses} onChange={handleChange}/>
            <input type="text" name="titles" Placeholder = "Titles Held" value={formData.titles} onChange={handleChange}/>
            <input type="text" name="about" Placeholder = "About" value={formData.about} onChange={handleChange}/>
            <input type="submit" value={action}/>

        </form>
    </div>
    );
};

export default Form