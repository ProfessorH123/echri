import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  private apiUrl = 'https://echri.onrender.com/toy/random/aleatory';

  constructor(private http: HttpClient) {}

  getRandomToys(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
