import React, { useContext, useReducer } from "react"

/////////////////
//Initial State
///////////////// 

const initialState = {
    url: "http://mfboxerrailsbackend.herokuapp.com",
    token: null,
    username: null,
    fighters: null,
    new: {
        name: "",
        wins: ""
    },
    edit: {
        id: 0,
        name: "",
        wins: ""
    }
};

/////////////////
//Reducer
///////////////// 

//action = {type: "", payload: ---}

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

            default:
                return state;
            
            break
    }
};

/////////////////////
//AppContext
////////////////////

const AppContext = React.createContext(null)

//////////////////
//AppState Component
///////////////// 

export const AppState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value = {{state, dispatch}}>
        {props.children}

    </AppContext.Provider>

}

///////////////
//useAppState hook
////////////// 

export const useAppState = () => {
    return React.useContext(AppContext)
}

