import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-tabla-p',
  templateUrl: './tabla-p.component.html',
  styleUrls: ['./tabla-p.component.css']
})
export class TablaPComponent implements OnInit {

  productos: any[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

}
