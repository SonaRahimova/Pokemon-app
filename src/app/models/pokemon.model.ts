export interface Pokemon {
    id: string;
    name: string;
    url: string;
}

export interface PokemonData {
    results: Array<Pokemon>;
}