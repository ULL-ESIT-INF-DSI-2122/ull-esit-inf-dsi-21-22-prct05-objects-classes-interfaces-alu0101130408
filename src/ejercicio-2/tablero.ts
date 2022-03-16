import {Ficha} from './ficha';
/**
 * Clase que define la creación y el comportamiento de un Tablero de juego del Conect-4
 * @param fil Numero de Filas del Tablero
 * @param col Numero de Columnas del Tablero
 * @param value Valor que toma una posición en el Tablero
 * @param tablero Un vector de vectores de tipo numerico que define el tablero 
 */
export class Tablero {
  private fil: number;
  private col: number;
  private value: number;
  private tablero : Array<Array<number>> =  new Array<Array<number>>();

  constructor(fil: number, col: number, value:number) {
    this.fil = fil;
    this.col = col;
    this.value = value;
    this.initFilas(fil);
    this.initColumnas(col, value);

  }

  /**
   * Método privado que inicializa las filas de un tablero
   * @param filas El numero de filas que se le pasa.
   * @returns dependiendo de si el numero es válido devuelve en caso de serlo un number o undefined en caso de no serlo.
   */
  private initFilas(filas: number): void | undefined {
    if (filas < 1) {
      return undefined;
    } else {
      for(let i: number = 0; i < filas; i++) {
        this.tablero.push(new Array<number>());
      }
    }
  }

  /**
   * Función privada que inicializa las columnas del tablero e indexa un valor en esa posición.
   * @param columnas numero de columnas para esas posiciones.
   * @param valor Valor que ira en las posiciones, inicialmente a 0.
   */

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

  /**
   * Función pública que devuelve el tablero creado 
   * @returns devuelve el objeto tablero creado en la clase.
   */
  public getTablero() {
    return this.tablero;
  }

  /** 
   * Función que devuelve el valor de una posicion concreta.
   * @param filas posicion de filas en las que se quiere encontrar el valor.
   * @param columnas posicion de columnas en la que se quiere encontrar el valor.
   * @returns devuelve el valor en esa posicion si es una posicion definida en la matriz, sino devuelve un undefined.
   */

  public getValor(filas: number, columnas: number): number | undefined {
    if (filas < 0 || columnas < 0 || filas >= this.fil || columnas >= this.col) {
      return undefined;
    }
    return this.tablero[filas][columnas];
  }

  /**
   * Función que establece el valor en una posicion de la matriz.
   * @param filas posicion de las filas donde se quiere almacenar un valor.
   * @param columnas posicion de las columnas donde se quiere almacenar un valor.
   * @param valor valor que se va a almacenar en la posicion tablero[filas][columnas]
   * @returns no devuelve nada ya que solo establece un valor, en caso de que este fuera de la matriz devuelve undefiend
   */
  public setValue(filas: number, columnas: number, valor: number): void | undefined {
    if (filas < 0 || columnas < 0 || filas >= this.fil || columnas >= this.col) {
      return undefined;
    }
    this.tablero[filas][columnas] = valor;
  }

  /**
   * Funcion que imprime por pantalla el tablero.
   */
  public imprimirTablero() {
    console.log(this.tablero);
  }
} 