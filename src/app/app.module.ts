import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { RodapeComponent } from 'src/rodape/rodape.component';
import { SobreComponent } from 'src/sobre/rodape.component';
import { ErroComponent } from 'src/erro404/erro404.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, RodapeComponent, SobreComponent, ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
