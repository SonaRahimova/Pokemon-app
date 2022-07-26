export interface Pokemon {
    id: number;
    name: string;
    url: string;
}

export interface PokemonData {
    results: Array<Pokemon>;
}