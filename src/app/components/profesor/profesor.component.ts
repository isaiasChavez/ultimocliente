import { Profesor } from '../../models/Profesor.model';
import { ProfesorService } from '../../services/profesor.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
   
  profesores:Profesor[] =[]
  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
  }

  traerProfesor(){
    this.profesorService.traerProfesores().subscribe((mostrar:any)=>
    {
       this.profesores=mostrar
       console.log({mostrar})
    })
    
  }

}
