import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer;

  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() {
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);

   }

   public inFavourites(pokemonName: string): boolean {
    if(this._trainer){
    return Boolean( this._trainer?.favourites.find((pokemon: Pokemon) => pokemon.name === pokemonName));
   }
   return false;
}

public addToFavourites(pokemon: Pokemon): void {
  if (this._trainer) {
    this._trainer.favourites.push(pokemon);
  }
}

public removeFromFavourites(pokemonName: string): void{
  if (this._trainer) {
    this._trainer.favourites = this._trainer.favourites.filter((pokemon: Pokemon) => pokemon.name !== pokemonName);
  }

}
}