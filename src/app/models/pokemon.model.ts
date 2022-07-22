export interface Pokemon{
    name: string;
    url: string;
}

export interface PokemonImage{
    pokemon: Pokemon;
    img: string;
    id: number;
    collected: boolean;
}

export interface PokemonRawData{
    results: Array<Pokemon>;
}