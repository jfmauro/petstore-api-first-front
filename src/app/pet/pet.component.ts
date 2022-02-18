import { Component, OnInit } from '@angular/core';

import {Pet, PetService} from "@jfmauro/petstore-core-api";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pet: Pet;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.loadPetById(3);
  }

  loadPetById(petId){
    this.petService.getPetById(petId)
      .subscribe(pet => {
        this.pet = pet;
        console.log(pet);
      }, error => {
          //console.log(error);

          if (error.status === 404) {
            console.log("404");

          } else if (error.status === 401) {
            console.log("401");

          } else {
            console.log("error");

          }

        });
  }

}
