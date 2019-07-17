import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products;

  //constructor(private productService: ProductsService) {
  //  this.products = productService.products;
  //}
  constructor (){
    this.products = [
      {
        "name": 'JOHN WICK PARABELLUM',
        "id": 1,
        "description": 'New York City becomes the bullet-riddled courtyard of a former assassin as he eliminates the gangsters who destroyed everything he wanted.',
        "img" : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-wick-3-1555403175.jpg?crop=1xw:1xh;center,top&resize=320:*',
        "rank" : this.ranking(4)
      }, 
      {
        "name": 'ALADIN',
        "id": 2,
        "description": `Aladdin is a petty thief who falls in love with the Sultan's daughter, Princess Jasmine. To be able to conquer it, you will accept a challenge from Jafar. Aladdin will have to enter a cave in the middle of the desert and get a magic lamp that contains the Genie who will be in charge of granting all his wishes`,
        "img" : 'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/pelicula/1aladdin_1558607773.jpg',
        "rank" : this.ranking(3)
      },
      {
        "name": 'EL REY LEON',
        "id": 3,
        "description": `Simba idolizes his father, King Mufasa, and takes his own destiny very seriously. But in the kingdom not everyone celebrates the arrival of the new puppy. Scar, Mufasa's brother and former heir to the throne, has his own plans.`,
        "img" : 'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/UEk9btfS7zLueqH-182x272.jpg',
        "rank" : this.ranking(5)
      }
    ]
  }

  ngOnInit() {
  }

  ranking(rank) {
    var star = [];
    for (var i = 0; i < rank; i++)
      star.push(i);
    return star;
  }

  

}
