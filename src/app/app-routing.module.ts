import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { SobreComponent } from 'src/sobre/rodape.component';
import { ErroComponent } from 'src/erro404/erro404.component';
import { SomaComponent } from 'src/soma/soma.component';
import { ArrayComponent } from 'src/array/array.component';
import { CategoriaComponent } from 'src/categoria/categoria.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'soma', component: SomaComponent},
  {path: 'array', component: ArrayComponent},
  {path: 'categoria', component: CategoriaComponent}
  {path: '**', component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
