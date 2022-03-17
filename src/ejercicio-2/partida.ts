import {Tablero} from './tablero';
/**
 * 
 * 
 */
export class Partida {

  constructor(private jugador1: string , private jugador2: string, private tablero: Tablero) {
    this.jugador1 = jugador1;
    this.jugador2 = jugador2;
    this.tablero = tablero;
  } 



  public inicioJuego(tablero: Tablero) {
    let inicio: number = 1;

    while( (tablero.contarNorte() != 4)) {

    }

  }

}