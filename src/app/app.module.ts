import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { SobreComponent } from 'src/sobre/rodape.component';
import { ErroComponent } from 'src/erro404/erro404.component';
import { SomaComponent } from 'src/soma/soma.component';
import { RodapeComponent } from 'src/rodape/rodape.component';
import { FormsModule } from '@angular/forms';
import { ArrayComponent } from 'src/array/array.component';
import { CategoriaComponent } from 'src/categoria/categoria.component';
import { ServicoEstado } from 'src/servicos/servico.estado';
import { HttpClientModule } from '@angular/common/http';
import { CidadaComponent } from 'src/cidade/cidade.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, RodapeComponent, SobreComponent, ErroComponent, SomaComponent, ArrayComponent, CategoriaComponent,
    CidadaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicoEstado],
  bootstrap: [AppComponent]
})
export class AppModule { }
