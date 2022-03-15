import {Pokemon} from './pokemon';

/**
 * Clase encargada de definir el funcionamiento de la Pokedex a través de un vector de Pokemons.
 * @param baseDatosPokemon Es un vector de Pokemons (Pokedex), que recoge a cada Pokemon y lo almacena en el vector.
 */
export class Pokedex {

  constructor(private baseDatosPokemon: Pokemon[]){
    this.baseDatosPokemon = baseDatosPokemon;
  }

  /**
   * Función que devuelve todos los Pokemons de la Base de Datos.
   * @returns Devuelve el vector con todos los pokemons registrados.
   */
  public getPokedex() {
    return this.baseDatosPokemon;
  }

  /**
   * Función que recibe un Pokemon y lo guarda en la Pokedex.
   * @param Pokemon Pokemon que entra a la base de datos de la Pokedex.
   */
  public setPokedex(Pokemon: Pokemon) {
    this.baseDatosPokemon.push(Pokemon);
  }

  /**
   * Función que recibe un Pokemon y compara con la Base de datos si existe ese Pokemon.
   * @param Pokemon Nombre del pokemon que se desea Buscar dentro de la Pokedex.
   * @return Devuelve en caso de encontrar al pokemon buscado en la Base de datos sino devuelve undefined
   */
  public buscarPokemon(Pokemon: Pokemon): Pokemon | undefined {
    let auxiliar: number = -1;

    this.baseDatosPokemon.forEach((i) => {
      if (i == Pokemon) {
        auxiliar = this.baseDatosPokemon.indexOf(i);
      }
    });
    if (auxiliar == -1) {
      return undefined;
    }

    return this.baseDatosPokemon[auxiliar];
  }

  /**
   * Función que muestra la base de datos de la Pokedex
   */
  public mostrarPokedex() {
    console.log(`──────────────────────────────────────────────`);
    console.log(`	» Los Pokemons Recogidos en la Pokedex son:«`);
    console.log(this.baseDatosPokemon);
    console.log(`──────────────────────────────────────────────`);
  }

}