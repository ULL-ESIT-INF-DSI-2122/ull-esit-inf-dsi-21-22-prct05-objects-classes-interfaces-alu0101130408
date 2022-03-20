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
  private value: string;
  private tablero : Array<Array<string>> =  new Array<Array<string>>();

  constructor(fil: number, col: number, value:string) {
    this.fil = fil;
    this.col = col;
    this.value = value;
    this.initFilas(fil);
    this.initColumnas(col, value);

  }

  /**
   * Funcion que devuelve las filas del tablero
   * @returns las filas del tablero
   */
  getFil(){
    return this.fil;
  }

  /**
   * Funcion que devuelve las columnas del tablero
   * @returns las columnas del tablero
   */
  getCol() {
    return this.col;
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
        this.tablero.push(new Array<string>());
      }
    }
  }

  /**
   * Función privada que inicializa las columnas del tablero e indexa un valor en esa posición.
   * @param columnas numero de columnas para esas posiciones.
   * @param valor Valor que ira en las posiciones, inicialmente a 0.
   */

  private initColumnas(columnas: number, valor: string): void | undefined {
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

  public getValue(filas: number, columnas: number): string | undefined {
    if(filas < 0 || filas >= this.fil || columnas < 0 || columnas >= this.col) {
      return undefined;
    }
    return this.tablero[filas][columnas];
    
  }

  /**
   * Funcion que imprime por pantalla el tablero.
   */
  public imprimirTablero() {
    console.log(`Visualización del Tablero:`);
    console.log(this.tablero);
  }

  /**
   * Funcion publica que analiza si una columna esta llena
   * @param columna columna donde se quiere colocar una ficha
   * @returns devuelve la fila si esta vacía
   */
  public obtenerFilaLibre(columna: number): number {
    for (let i:number = this.fil -1; i >= 0 ; i--) {
      if(this.tablero[i][columna] == '') {
        return i;
      }
    }
    return -1;
  }

  /**
   * Función publicaque coloca una ficha en la columna especificada
   * @param valor valor O u X que indica las fichas
   * @param columna columna donde se coloca la ficha
   * @returns devuelve la ficha colocada en ese tablero
   */
  public colocarFicha(valor: string, columna:number): void | undefined {
    if( columna < 0 || columna >= this.col) {
      return undefined;
    }

    let filas: number = this.obtenerFilaLibre(columna);
    this.tablero[filas][columna] = valor;
    
  } 

  /**
   * Funcion encargada de limpiar el tablero
   * @returns devuelve el tablero vacio.
   */
  public limpiartableroVacio() {
    for(let i: number = 0; i < this.col; i ++) {
      let resultado: number = this.obtenerFilaLibre(i); 
      if (resultado != -1) {
        return 0;
      }
    }
    return 1;
  }
  // Norte (i-1,j), Sur(i+1,j), este(i,j+1), oeste(i,j-1)
  /**
   * Función que cuenta el numero de fichas colocadas en las posiciones Norte.
   * @returns numero de fichas de un jugador colocadas en vertical.
   */
  public contarNorte() {
    let contador: number = 0;
    for(let i: number = this.fil-1; i >= 0 ; i++) {
      for(let j:number = 0; j < this.col; j++) {
        if((this.tablero[i-1][j] == 'x') || (this.tablero[i-1][j] == 'O')) {
          contador ++;
        }
      }
    }
  
    return contador;
  }

  /**
   * Función que cuenta el numero de fichas colocadas en la posicion Este.
   * @returns numero de fichas colocadas en horizontal.
   */
  public contarEste() {
    let contador: number = 0;
    for(let i: number = this.fil-1; i >= 0 ; i++) {
      for(let j:number = 0; j < this.col; j++) {
        if((this.tablero[i][j]+1 == 'x') || (this.tablero[i][j+1] == 'O')) {
          contador ++;
        }
      }
    }
  
    return contador;
  }

  /**
   * Funcion que cuenta el numero de fichas colcoadas en NortEste.
   * @returns numero de fichas colocadas en diagonal.
   */
  public contarDiagonal() {
    let contador: number = 0;
    for(let i: number = this.fil-1; i >= 0 ; i++) {
      for(let j:number = 0; j < this.col; j++) {
        if((this.tablero[i-1][j+1] == 'x') || (this.tablero[i-1][j+1] == 'O')) {
          contador ++;
        }
      }
    }
    return contador;
  }

} 