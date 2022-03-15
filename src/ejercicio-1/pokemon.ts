/**
 * Clase encargada de definir la información de los Pokemons.
 * @param nombre Nombre del Pokemon.
 * @param peso Peso del Pokemon.
 * @param altura Altura del Pokemon.
 * @param tipo Tipo del Pokemon, comprendido entre Hierba, Fuego, Agua o Electricidad.
 * @param Estadisticas Estadísticas bases de los pokemons definidos, estas son ataque, defensa, velocidad y Vida.
 */

export class Pokemon {

  private Estadisticas = {
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    salud: 0,
  }
  constructor(private nombre: string, private peso: number, private altura: number, private tipo: string, Estadisticas: [number, number, number, number]) {

    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
  	this.tipo = tipo;

    this.Estadisticas.ataque = Estadisticas[0];
    this.Estadisticas.defensa = Estadisticas[1];
    this.Estadisticas.velocidad = Estadisticas[2];
		this.Estadisticas.salud = Estadisticas[3];
  }

  /**
  * Funcion 'getNombre' que devuelve el nombre del pokemon.
  * @returns Devuelve el nombre del Pokemon.
  */
  public getNombre() {
    return this.nombre;
  }

  /**
  * Funcion 'getPeso' que devuelve el peso del pokemon.
  * @returns Devuelve el peso del Pokemon.
  */

  public getPeso() {
    return this.peso;
  }

  /**
  * Funcion 'getAltura' que devuelve la altura del pokemon.
  * @returns Devuelve la altura del Pokemon.
  */

  public getAltura() {
    return this.altura;
  }


  /**
  * Funcion 'getTipo' que devuelve el tipo del pokemon.
  * @returns Devuelve el tipo del Pokemon.
  */
  public getTipo() {
    return this.tipo;
  }

  /**
  * Funcion 'getEstadistica' que devuelve las estadísticas del pokemon.
  * @returns Devuelve la estadistica seleccionada del Pokemon.
  */
  public getEstadisticas() {
    return this.Estadisticas;
  }


	/**
  * Funcion 'getNombre' que devuelve el nombre del pokemon.
  * @param puntosVida Nuevo valor a actualizar en la vida del pokemon
  * @returns Devuelve la vida actualizada del Pokemon.
  */
  public setSalud(puntosVida: number) {
    this.Estadisticas.salud = puntosVida;
  }
}
