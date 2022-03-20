import {Tablero} from './tablero';
/**
 * Clase encargada de iniciar una partida entre dos jugadores.
 * @param jugador1 Primer jugador correspondiente a las fichas representadas por 'X'.
 * @param jugador2 Segundo jugador correspondiente a las ficha representadas por  'O'.
 * @param tablero Tablero de juego que se utilizará.
 * 
 */
export class Partida {

  constructor(private jugador1: string , private jugador2: string, private tablero: Tablero) {
    this.jugador1 = jugador1;
    this.jugador2 = jugador2;
    this.tablero = tablero;
  } 

  /**
   * Funcion que obtiene el nombre del jugador 1
   * @returns el nombre del jugador 1
   */
  getJugador1() {
    return this.jugador1;
  }

    /**
   * Funcion que obtiene el nombre del jugador 2
   * @returns el nombre del jugador 2
   */
  getJugador2() {
    return this.jugador2
  }

  /**
  * Funcion que obtiene el tablero de juego
  * @returns el tablero de juego
  */

  getTablero() {
    return this.tablero;
  }

  /**
   * Funcion que inicia la partida entre amboss jugadores
   * @param tablero tablero en el que se va a desarrollar la partida
   * @return devuelve el ganador de la partida
   */
  public inicioJuego(tablero: Tablero) {
    let turno: number = 1;

    while( (tablero.contarNorte() != 4) || (tablero.contarEste()!= 4) || (tablero.contarDiagonal() != 4)) {
      let turno: number = 1;
      if(turno = 1) {
        console.log(`»» Es turno de: ${this.jugador1}`);
        // En este punto de codigo para colocar ficha se podria mandar un mensaje con funciones de librerias como scanf que permita solicitar al jugador correspondiente una ficha
        tablero.colocarFicha('X', 3);
        turno = 2;
      } else {
        console.log(`»» Es turno de: ${this.jugador2}`);
        // En este punto de codigo para colocar ficha se podria mandar un mensaje con funciones de librerias como scanf que permita solicitar al jugador correspondiente una ficha
        tablero.colocarFicha('O', 4);
        turno = 1;
      }
    }
    /*
    La idea es 
    if(jugador1 es el que ha llegado a 4 fichas ) {
      console.log(`El ganador es {this.jugador1.getJugador1()}`);
      return this.jugador1.getJugador1();
    } else {
      console.log(`El ganador es {this.jugador2.getJugador2()}`);
      return this.jugador2.getJugador2();
    }*/
  }

}