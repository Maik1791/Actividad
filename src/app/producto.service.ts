import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


    private producto = [
      {
        nombre:"", 
        descripcion:"", 
        precio: 0,
        categoria:"", 
        imagen:"" 
      
      }
      
    ];
  
    getProductos() {
      return this.producto;
    }
  
    agregarProducto(producto: any) {
      this.producto.push(producto);
    }
  }
  