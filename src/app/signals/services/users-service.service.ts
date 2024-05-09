import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http = inject( HttpClient );
  // private baseUrl = 'https://regres.in/api/users';
  private baseUrl: string = environments.baseUrl;

  getUserById( id:number ): Observable<User> {

    return this.http.get<SingleUserResponse>(`${ this.baseUrl }/data/${ id }`)
    .pipe(
      map( response => response ),
      tap( console.log ),
    );
  }

}
