import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http:HttpClient) { }

   traerProfesores(){
     return this.http.get(`${environment.API_URI}/profesores`)
     
   }


}
