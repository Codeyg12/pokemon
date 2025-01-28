import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Pokemon {
    name: string;
    id: number;
}

interface PokemonContextType {
    state: Pokemon[];
    dispatch: React.Dispatch<PokemonAction>;
}

export const PokemonContext = createContext<PokemonContextType>({
    state: [],
    dispatch: () => {}
})

export const usePokemon = () => {
    return useContext(PokemonContext);
}

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(pokemonReducer, initialState);
    
    return (
        <PokemonContext.Provider value={{ state, dispatch }}>
            {children}
        </PokemonContext.Provider>
    )
}

interface AddPokemonAction {
    type: "ADD_POKEMON";
    payload: Pokemon;
}

interface RemovePokemonAction {
    type: "REMOVE_POKEMON";
    payload: Pokemon;
}

type PokemonAction = AddPokemonAction | RemovePokemonAction;

const pokemonReducer = (state: Pokemon[], action: PokemonAction): Pokemon[] => {
    switch (action.type) {
        case "ADD_POKEMON":
            return [...state, action.payload];
        case "REMOVE_POKEMON":
            return state.filter(pokemon => pokemon.id !== action.payload.id);
        default:
            return state;
    }
}

const initialState: Pokemon[] = [];

export const pokemonCount = (state: Pokemon[]): number => {
    return state.length;
}