import { Pokemon } from "./pokemon.model";

export interface Trainer {
    id: number;
    name: string;
    favourites: Pokemon[];
}