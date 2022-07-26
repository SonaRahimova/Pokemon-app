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

  public loading: boolean = false;
  public isFavourite: boolean = false;
  @Input() pokemonName: string ="";

  constructor(
    private trainerService: TrainerService,
    private readonly favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
    this.isFavourite = this.trainerService.inFavourites(this.pokemonName);
  }
  onFavouriteClick(): void {
    this.loading = true;
    //Add the pokemons to the fav
  this.favouriteService.addToFavourtites(this.pokemonName)
  .subscribe({
    next: (response: Trainer) => {
      this.loading = false;
      this.isFavourite = this.trainerService.inFavourites(this.pokemonName);

  },
  error: (error: HttpErrorResponse) =>{
    console.log("ERROR", error.message);
  }
 
})

  }
}
