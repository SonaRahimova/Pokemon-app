import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerService } from './trainer.service';

const { apiKey, apiTrainers } = environment;

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly trainerService: TrainerService,

  ) { }
  //get the pokemon based in the name
  public addToFavourtites(pokemonName: string): Observable<Trainer> {

    if (!this.trainerService.trainer) {
      throw new Error("addToFavourites: There is no user");
    }

    const trainer: Trainer = this.trainerService.trainer;
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonByName(pokemonName);

    if (!pokemon) {
      throw new Error("addToFavourites: No pokemon with name: " + pokemonName);
    }

    if (this.trainerService.inFavourites(pokemonName)) {
      this.trainerService.removeFromFavourites(pokemonName);
    }else{
      this.trainerService.addToFavourites(pokemon);
    }

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    })

    console.log(trainer)
    //this is the values we want to update
    return this.http.patch<Trainer>(`${apiTrainers}/${trainer.id}`, {
      favourites: [...trainer.favourites]
    }, {
      headers
    })
      .pipe(
        tap((uppdatedTrainer: Trainer) => {
          this.trainerService.trainer = uppdatedTrainer;
        })
      )
  }
}
