import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class DishService {


  constructor(private http: HttpClient) { }

  getPopularDishes(): Observable<any[]> {
    return this.http.get<any[]>(NAV_URL).pipe(
      map(response => response) // Transform response if necessary
    );
  }
}
