import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutosService {

  constructor(private http:HttpClient) {
    
   }

   traerTodosLosInstitutos(){
     return this.http.get(`${environment.API_URI}/institutos`)
   }
}
