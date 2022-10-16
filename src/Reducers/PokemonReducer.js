import { ERROR, FETCH } from "../Pokemon/PokemonActions";



export const reducer = (state,action)=>{
    switch(action.type) {
        case FETCH:
            return{
                Pokemons: action.payload,
                Loading: false,
                Error: null,
            }
        case ERROR:
            return{
                Pokemons: [],
                Loading: true,
                Error: action.payload,
            }

        default:
            return state
    }
}