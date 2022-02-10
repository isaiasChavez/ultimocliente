import { ProfesorComponent } from './components/profesor/profesor.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutosComponent } from './components/institutos/institutos.component';
const routes: Routes = [

  
   {
    path: 'instituto',
    component: InstitutosComponent,
  },
  {
    path: 'carreras',
    component: CarrerasComponent,
  },
  {
    path: 'profesores',
    component: ProfesorComponent,
  },
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
