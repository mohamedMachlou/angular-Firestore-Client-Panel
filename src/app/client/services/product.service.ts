import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { Firestore, collection, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
}
