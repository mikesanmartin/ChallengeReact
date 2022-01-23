import { createStore } from "redux";

const heroTeam = (state = [], action) => {
    switch (action.type){
        case 'ADD_HERO': 
            return state.concat({...action.payload})
        case 'REMOVE_HERO':
            return state.filter((hero) => hero.id !== action.payload.id)
        default: 
            return state
    }
}

export const store = createStore(heroTeam)