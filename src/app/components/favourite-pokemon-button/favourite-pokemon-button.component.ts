import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { FavouriteService } from 'src/app/services/favourite.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-favourite-pokemon-button',
  templateUrl: './favourite-pokemon-button.component.html',
  styleUrls: ['./favourite-pokemon-button.component.css']
})
export class FavouritePokemonButtonComponent implements OnInit {

  public isFavourite: boolean = false;
  @Input() pokemonName: string ="";

  get loading(): boolean{
    return this.favouriteService.loading;
  }

  constructor(
    private trainerService: TrainerService,
    private readonly favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
    this.isFavourite = this.trainerService.inFavourites(this.pokemonName);
  }
  onFavouriteClick(): void {
    //Add the pokemons to the fav
  this.favouriteService.addToFavourtites(this.pokemonName)
  .subscribe({
    next: (response: Trainer) => {
    console.log("NEXT", response);

  },
  error: (error: HttpErrorResponse) =>{
    console.log("ERROR", error.message);
  }
 
})

  }
}
