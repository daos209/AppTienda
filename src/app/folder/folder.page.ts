import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: 'src/app/folder.page.html',
  styleUrls: ['src/app/folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string = '';
  public products = [
    {
      name: 'Producto 1',
      price: 2999,
      description: 'Descripción del producto 1',
      image: 'assets/images/product1.jpg'
    },
    {
      name: 'Producto 2',
      price: 4999,
      description: 'Descripción del producto 2',
      image: 'assets/images/product2.jpg'
    },
    {
      name: 'Producto 3',
      price: 1999,
      description: 'Descripción del producto 3',
      image: 'assets/images/product3.jpg'
    }
    // Agrega más productos según sea necesario
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') || '';
  }

  buyProduct(product: { name: string; price: number; description: string; image: string }) {
    console.log('Producto comprado:', product);
    // Aquí puedes agregar la lógica para manejar la compra del producto
  }
}