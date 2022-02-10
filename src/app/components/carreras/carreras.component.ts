import { CarrerasService } from './../../services/carreras.service';
import { Carreras } from '../../models/carrera.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {
  carreras:Carreras[]= []

  constructor(private carrerasService:CarrerasService) {

    

  }


  ngOnInit(): void {
  
  
  }

  mostrar(){
    console.log("ejecutando")
    this.carrerasService.mostrarCarreras().subscribe((mostrar:any)=>{
      console.log(mostrar)
      this.carreras = mostrar

    }
    )

  }
  

}
