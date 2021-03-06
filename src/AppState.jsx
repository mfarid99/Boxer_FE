import React, { useContext, useReducer } from "react"

const initialState = {
    url: "https://mfboxerrailsbackend.herokuapp.com",
    token: null,
    username: null,
    fighters: null,
    new: {
        name: "",
        photo: "",
        wins: "",
        weightclass: "",
        wins: "",
        losses: "",
        titles: "",
        about: ""

    },
    edit: {
        id: 0,
        name: "",
        photo: "",
        wins: "",
        weightclass: "",
        wins: "",
        losses: "",
        titles: "",
        about: ""
    }
};


const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case "auth":
            newState = { ...state, ...action.payload };
            return newState;
            break;
            case "logout":
                newState = {...state, token: null, username: null}
                window.localStorage.removeItem("auth")
                return newState
                case "getFighters": 
                newState = {...state, fighters: action.payload}
                return newState
                break
            case "select":
                newState= {...state, edit: action.payload}
                return newState
                break;
            default:
                return state;
            
            break
    }
};



const AppContext = React.createContext(null)


export const AppState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value = {{state, dispatch}}>
        {props.children}

    </AppContext.Provider>

}

export const useAppState = () => {
    return React.useContext(AppContext)
}

