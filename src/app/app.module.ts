import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { InstitutosComponent } from './components/institutos/institutos.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutosComponent,
    CarrerasComponent,
    ProfesorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
