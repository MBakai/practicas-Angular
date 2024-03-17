import { Component } from '@angular/core';

interface MenuGraficas {
  nombre: string,
  ruta: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {


  graficasMenu: MenuGraficas[] = [
    {
      nombre: 'Barras',
      ruta: '/graficas/barras'
    },
    {
      nombre: 'Barras Dobles',
      ruta: '/graficas/barras-doble'
    },
    {
      nombre: 'Dona',
      ruta: '/graficas/dona'
    },
    {
      nombre: 'Dona Http',
      ruta: '/graficas/dona-http'
    }
    
  ]

}
