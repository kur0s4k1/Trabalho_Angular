import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { RodapeComponent } from 'src/rodape/rodape.component';
import { SobreComponent } from 'src/sobre/rodape.component';
import { ErroComponent } from 'src/erro404/erro404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: '**', component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
