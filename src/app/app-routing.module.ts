import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 

import { ProductoComponent } from './producto/producto.component';
import { TablaPComponent } from './tabla-p/tabla-p.component';

const routes: Routes = [
  {path: 'inicio', component: AppComponent},
    { path: 'productos', component : ProductoComponent },
     
       {path: 'tablap', component: TablaPComponent},
   ];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
