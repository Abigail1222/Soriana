import { Injectable } from '@angular/core';
import { Product } from '../product.js';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  hardcode = [{
    id: 1,
    name: "Blusa rosa",
    image: 'assets/blusa_rosa.jpg',
    url: '',
    description: 'Cherokee',
    size: '9',
    price: '199'
  },
  {
    id: 2,
    name: "Short",
    image: 'assets/short.jpg',
    url: '',
    description: 'LEVIS',
    size: 'M',
    price: '259'
  },
  {
    id: 3,
    name: "Zapatillas",
    image: 'assets/zapatillas.png',
    url: '',
    description: 'Flexi',
    size: '24',
    price: '239'
  },
  {
    id: 4,
    name: "Lentes",
    image: 'assets/lentes.png',
    url: '',
    description: 'Panama',
    size: 'Unitalla',
    price: '299'
  },
  {
    id: 5,
    name: "Camisa cuadros",
    image: 'assets/camisa.jpg',
    url: '',
    description: 'Marca Bazzar',
    size: '32',
    price: '349'
  },
  {
    id: 6,
    name: "Playera",
    image: 'assets/playera.jpg',
    url: '',
    description: 'Marvel',
    size: 'L',
    price: '489'
  },
  {
    id: 7,
    name: "Saco",
    image: 'assets/saco.jpg',
    url: '',
    description: 'T&H',
    size: 'M',
    price: '1039'
  },
  {
    id: 8,
    name: "Cinturón",
    image: 'assets/cinturon.jpg',
    url: '',
    description: 'Buffway',
    size: '38',
    price: '199'
  },
  {
    id: 9,
    name: "Calcetas",
    image: 'assets/calceta.jpg',
    url: '',
    description: 'Grafito',
    size: 'Recien nacido',
    price: '59'
  },
  {
    id: 10,
    name: "Mameluco",
    image: 'assets/mameluco.jpg',
    url: '',
    description: 'Little me',
    size: '3 meses',
    price: '399'
  },
  {
    id: 11,
    name: "Pañalero",
    image: 'assets/panalero.jpg',
    url: '',
    description: 'Bam-Bu',
    size: '6 meses',
    price: '119'
  },
  {
    id: 12,
    name: "Moño",
    image: 'assets/mono.jpg',
    url: '',
    description: 'KidsLuxury',
    size: 'Unitalla',
    price: '99'
  },
  {
    id: 13,
    name: "Aretes Esfera",
    image: 'assets/arete.jpg',
    url: '',
    description: 'Fraiche',
    size: 'Unitalla',
    price: '117'
  },
  {
    id: 14,
    name: "Collar perlas",
    image: 'assets/collar.jpg',
    url: '',
    description: 'Eva',
    size: 'Unitalla',
    price: '449'
  },
  {
    id: 15,
    name: "Reloj",
    image: 'assets/reloj.jpg',
    url: '',
    description: 'CURREN',
    size: 'Unitalla',
    price: '739'
  },
  {
    id: 16,
    name: "Anillo",
    image: 'assets/anillo.jpg',
    url: '',
    description: 'Her',
    size: 'CH',
    price: '79'
  },
  {
    id: 17,
    name: "Tenis",
    image: 'assets/tenis.jpg',
    url: '',
    description: 'Charly',
    size: '9',
    price: '459'
  },
  {
    id: 18,
    name: "Tacón",
    image: 'assets/tacon.jpg',
    url: '',
    description: 'Spring',
    size: '26',
    price: '449'
  },
  {
    id: 19,
    name: "Zapato hombre",
    image: 'assets/zapato.jpg',
    url: '',
    description: 'Privalia',
    size: '8',
    price: '639'
  },
  {
    id: 20,
    name: "Chancla playa",
    image: 'assets/chancla.jpg',
    url: '',
    description: 'Summer',
    size: '7',
    price: '89'
  },
  {
    id: 21,
    name: "Sudadera",
    image: 'assets/sudadera.jpg',
    url: '',
    description: 'Piru',
    size: '14',
    price: '259'
  },
  {
    id: 22,
    name: "Playera",
    image: 'assets/thing.jpg',
    url: '',
    description: 'Sibuts',
    size: '12',
    price: '249'
  },
  {
    id: 23,
    name: "Impermeable",
    image: 'assets/impermeable.png',
    url: '',
    description: 'Peques',
    size: '2 a 3 años',
    price: '439'
  },
  {
    id: 24,
    name: "Vestido",
    image: 'assets/vestido.jpg',
    url: '',
    description: 'Up',
    size: '3 años',
    price: '279'
  },
  {
    id: 25,
    name: "Arroz",
    image: 'assets/arroz.jpg',
    url: '',
    description: 'Verde valle',
    size: '32',
    price: '34'
  },
  {
    id: 26,
    name: "Frijol",
    image: 'assets/frijol.jpg',
    url: '',
    description: 'Frijolin',
    size: 'L',
    price: '39'
  },
  {
    id: 27,
    name: "Elote",
    image: 'assets/elote.jpg',
    url: '',
    description: 'La costeña',
    size: 'M',
    price: '19'
  },
  {
    id: 28,
    name: "Champiñones",
    image: 'assets/champi.jpg',
    url: '',
    description: 'Herdez',
    size: '38',
    price: '25'
  },
  {
    id: 29,
    name: "Hisopos",
    image: 'assets/hisopo.jpg',
    url: '',
    description: 'Medimart',
    size: '32',
    price: '24'
  },
  {
    id: 30,
    name: "Alcohol etílico",
    image: 'assets/alcohol.jpg',
    url: '',
    description: 'Jaloma',
    size: 'L',
    price: '29'
  },
  {
    id: 31,
    name: "Agua oxigenada",
    image: 'assets/oxi.jpg',
    url: '',
    description: 'Alcofarma',
    size: 'M',
    price: '19'
  },
  {
    id: 32,
    name: "Torundas",
    image: 'assets/torunda.jpg',
    url: '',
    description: 'Medimart',
    size: '38',
    price: '42'
  },
  {
    id: 33,
    name: "Tomate",
    image: 'assets/tomate.jpg',
    url: '',
    description: 'Soriana',
    size: '32',
    price: '44 kg'
  },
  {
    id: 34,
    name: "Cebolla",
    image: 'assets/cebolla.jpg',
    url: '',
    description: 'Soriana',
    size: 'L',
    price: '11 kg'
  },
  {
    id: 35,
    name: "Manzana roja",
    image: 'assets/manzana.jpg',
    url: '',
    description: 'Soriana',
    size: 'M',
    price: '42 kg'
  },
  {
    id: 36,
    name: "Platano Chiapas",
    image: 'assets/platano.jpg',
    url: '',
    description: 'Soriana',
    size: '38',
    price: '10 kg'
  }
];
  items: Product[] = [];
  subtotal: number = 0;
  total: number = 0;
  envio: number = 49;
  dia: string;
  hora: string;
  direccion: string;
  numero: string;

  constructor() { }

  getNumberItems() {
    return this.items.length
  }
  
  addToCart(id: any) {
    this.items.push(this.hardcode[id-1]);
    this.subtotal = this.subtotal + parseFloat(this.hardcode[id-1].price);
  }

  removeProduct(id: any) {
    var i=0;
    while (i < this.items.length) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
      } else {
        ++i;
      }
    }
    this.subtotal = this.subtotal - parseFloat(this.hardcode[id-1].price);
  }

  emptyCart() {
    this.items.length = 0;
    this.subtotal = 0;
    console.log(this.items);
  }

  getSubtotal() {
    return this.subtotal;
  }

  getTotal() {
    this.total = this.subtotal + this.envio;
    return this.total;
  }

  getEnvio(){
    return this.envio;
  }

  envioGratis(){
    this.envio = 0;
    return this.envio;
  }

  getItems() {
    return this.items;
  }

  setDatos(dia, hora, direccion, numero) {
    this.dia = dia;
    this.hora = hora;
    this.direccion = direccion;
    this.numero = numero;
  }

  getDia() {
    return this.dia;
  }

  getHora(){
    return this.hora;
  }

  getDireccion(){
    return this.direccion;
  }

  getNumero(){
    return this.numero;
  }



}
