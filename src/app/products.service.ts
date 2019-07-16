import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products = [
    {
      name: 'A',
      id: 1,
      description: 'A large phone with one of the best screens',
      img : 1,
      rank : 1,
    }, 
    {
      name: 'B',
      id: 2,
      description: 'A large phone with one of the best screens',
      img : 2,
      rank : 2,
    },
    {
      name: 'C',
      id: 3,
      description: 'A large phone with one of the best screens',
      img : 3,
      rank : 3,
    },
  ];

  constructor() { }
}
