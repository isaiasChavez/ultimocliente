import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {


  constructor(private http:HttpClient) {}

  mostrarCarreras(){

    return this.http.get(`${environment.API_URI} /carreras`)
    
  }


}
