import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products = [
    {
      name: 'JOHN WICK PARABELLUM',
      id: 1,
      description: 'A large phone with one of the best screens',
      img : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-wick-3-1555403175.jpg?crop=1xw:1xh;center,top&resize=320:*',
      rank : 1,
    }, 
    {
      name: 'ALADIN',
      id: 2,
      description: 'A large phone with one of the best screens',
      img : 'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/pelicula/1aladdin_1558607773.jpg',
      rank : 2,
    },
    {
      name: 'EL REY LEON',
      id: 3,
      description: 'A large phone with one of the best screens',
      img : 'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/UEk9btfS7zLueqH-182x272.jpg',
      rank : 3,
    },
  ];

  constructor() { }
}
