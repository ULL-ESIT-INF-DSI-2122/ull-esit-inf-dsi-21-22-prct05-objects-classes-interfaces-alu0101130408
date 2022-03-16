/**
 * Clase encargada de definir un ficha en nuestro tablero.
 * @param id Numero de identificacion de la ficha, (1: para representar las fichas amarillas y  2: para representar las fichar rojas)
 * @param color Color asociado al numero de identificacion de las fichas.
 */

export class Ficha {
  constructor(private  id: number, private color: string){
      this.color = color;
      this.id = id;
  }

  /**
  * Funcion que devuelve la ficha
  * @returns El color del equipo al que pertence la ficha.
  */
  getColor() {
    return this.color;
  }

  /**
  * Funcion que establece el equipo de una ficha
  * @param colorEquipo color del equipo al que pertenece la ficha
  */
  setColor(id: number): void | undefined {
    if(id == 1) {
      this.color = "amarillo";
    }
    if(id == 2) {
      this.color = "rojo";
    }else {
      return undefined;
    }
  }   
  /**
   * Funcion que devuelve el id/valor de la ficha
   */
  getID() {
    return this.id;
  }
  /**
   * Función que establece el ID de una ficha.
   * @param valor valor de ID que se le quiere asociar a una ficha
   */
  setId(valor: number) {
    this.id = valor;
  }

}