import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-favourite-pokemon-button',
  templateUrl: './favourite-pokemon-button.component.html',
  styleUrls: ['./favourite-pokemon-button.component.css']
})
export class FavouritePokemonButtonComponent implements OnInit {

  @Input() pokemonName: string ="";
  get loading(): boolean{
    return this.favouriteService.loading;
  }

  constructor(
    private readonly favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
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
