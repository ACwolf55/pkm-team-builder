//INTIAL STATE
const intialState = {
    pokemon: []

}

//ACTION CONSTANTS
const SET_POKEMON = 'SET_POKEMON'


//ACTION CREATORS

export const setPokemon = (pkmObj) => {
    return {
        type: SET_POKEMON,
        payload: pkmObj
    }

}

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case SET_POKEMON:
            const foundPkmIndex = state.pokemon.findIndex((pokemon) => {
                return pokemon.pkmName.toLowerCase() === action.payload.pkmName.toLowerCase()
            })

            if (foundPkmIndex != -1) {
                console.log('found index ' + foundPkmIndex)
                return state
            }
            else {
                const pokemonCopy = [...state.pokemon]
                pokemonCopy.push(action.payload)
                    return {
                        ...state,
                        pokemon:pokemonCopy
                    }
            }

        default:
            return state
    }



}