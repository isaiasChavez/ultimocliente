import { InstitutosService } from './../../services/institutos.service';
import { Instituto } from './../../models/instituto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institutos',
  templateUrl: './institutos.component.html',
  styleUrls: ['./institutos.component.css']
})
export class InstitutosComponent implements OnInit {

  constructor(private institutosService:InstitutosService) { }

  institutos:Instituto[]= []
  ngOnInit(): void {
  }

  traerInstitutos(){
    this.institutosService.traerTodosLosInstitutos().subscribe((data:any)=>{
      this.institutos = data
    })
  }

}
