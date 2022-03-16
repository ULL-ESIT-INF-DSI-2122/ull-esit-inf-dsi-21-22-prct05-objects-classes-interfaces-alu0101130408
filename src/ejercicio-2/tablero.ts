import {Ficha} from './ficha';
/**
 * 
 */
export class Tablero {
  private fil: number;
  private col: number;
  private value: number;
  private tablero : Array<Array<number>> =  new Array<Array<number>>()

  constructor(fil: number, col: number, value:number) {
    this.fil = fil;
    this.col = col;
    this.value = value;
    this.initFilas(fil);
    this.initColumnas(col, value);

  }

  private initFilas(filas: number): void | undefined {
    if (filas < 1) {
      return undefined;
    } else {
      for(let i: number = 0; i < filas; i++) {
        this.tablero.push(new Array<number>());
      }
    }
  }

  private initColumnas(columnas: number, valor: number): void | undefined {
    if (columnas < 1) {
      return undefined;
    }
    for (let i: number = 0; i < this.tablero.length; i++ ) {
      for(let j: number = 0; j < columnas; j++) {
        this.tablero[i].push(valor);
      }
    }
  }

  public getTablero() {
    return this.tablero;
  }

  public getValor(filas: number, columnas: number): number | undefined {
    if (filas < 0 || columnas < 0 || filas >= this.fil || columnas >= this.col) {
      return undefined;
    }
    return this.tablero[filas][columnas];
  }

  public setValue(filas: number, columnas: number, valor: number): void | undefined {
    if (filas < 0 || columnas < 0 || filas >= this.fil || columnas >= this.col) {
      return undefined;
    }
    this.tablero[filas][columnas] = valor;
  }

  public imprimirTablero() {
    console.log(this.tablero);
  }
} 