import { Pokemon } from "./pokemon";
/**
 * Clase encargada de simular el combate entre dos Pokemons.
 * @param pokemon1 Primer pokemon que se enfrenta en el combate.
 * @param pokemon2 Contrincante del Pokemon 1.
 */

export class Combat {

  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon){
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  /**
   * Función que calcula el daño inflingido de un pokemon a otro y viceversa.
   * @param atacante Iniciador de la pelea entre ambos pokemons.
   * @return Devuelve el daño inflingido según la fórmula especificada que depende de la efectividad entre los tipos elementales de ambos pokemons.
   */

  public calculoDañoInflingido(atacante: number): number {
    let efectividad: number = 0;
    let daño: number = 0;

    if (this.pokemon1.getTipo() == this.pokemon2.getTipo()) {
      efectividad = 0.5;
    } else {

      if (this.pokemon1.getTipo() == "fuego") {
        if (this.pokemon2.getTipo() == "hierba") {
          efectividad = 2;
        }
        if (this.pokemon2.getTipo() == "agua") {
          efectividad = 0.5;
        }
        if (this.pokemon2.getTipo() == "electrico") {
          efectividad = 1;
        }
      }

      if (this.pokemon1.getTipo() == "hierba") {
        if (this.pokemon2.getTipo()== "fuego") {
          efectividad = 0.5;
        }
        if (this.pokemon2.getTipo() == "agua") {
          efectividad = 2;
        }
        if (this.pokemon2.getTipo() == "electrico") {
          efectividad = 1;
        }
      }

      if (this.pokemon1.getTipo() == "agua") {
        if (this.pokemon2.getTipo() == "electrico") {
          efectividad = 0.5;
        }
        if (this.pokemon2.getTipo() == "fuego") {
          efectividad = 2;
        }
        if (this.pokemon2.getTipo() == "hierba") {
          efectividad = 0.5;
        }
      }

      if (this.pokemon1.getTipo() == "electrico") {
        if (this.pokemon2.getTipo() == "fuego") {
          efectividad = 1;
        }
        if (this.pokemon2.getTipo() == "agua") {
          efectividad = 2;
        }
        if (this.pokemon2.getTipo() == "hierba") {
          efectividad = 1;
        }
      }
    }

    if (atacante == 1) {
      daño = (50 * (this.pokemon1.getEstadisticas().ataque / this.pokemon2.getEstadisticas().defensa) * efectividad);
      return Math.trunc(daño);
    } else {

      if (efectividad == 0.5) {
        efectividad = 2;
      }
      if (efectividad == 2) {
        efectividad = 0.5;
      }
      daño = (50 * (this.pokemon2.getEstadisticas().ataque / this.pokemon1.getEstadisticas().defensa) * efectividad);
      return Math.trunc(daño);
    }  
  }

  /**
   * Función que muestra las diferentes estadísticas de los Pokemons y calcula el Ganador del combate pokemon.
   * @return Devuelve una cadena con el nombre del Pokemon que ha ganado dependiendo de la vida resultante.
   */
  public combatePokemon(): string {
    let atacante: number = 1;
    console.log(`──────────────────────────────────────────────────────────────────`);
    console.log(`» ${this.pokemon1.getNombre()}  vs   ${this.pokemon2.getNombre()}`);
    console.log(`» Vida: ${this.pokemon1.getEstadisticas().salud}      » Vida: ${this.pokemon2.getEstadisticas().salud}`);
    console.log(`» Ataque: ${this.pokemon1.getEstadisticas().ataque}    » Ataque: ${this.pokemon2.getEstadisticas().ataque}`);
    console.log(`» Defensa: ${this.pokemon1.getEstadisticas().defensa}   » Defensa: ${this.pokemon2.getEstadisticas().defensa}`);
    console.log(`──────────────────────────────────────────────────────────────────`);

    while( (this.pokemon1.getEstadisticas().salud > 0) && (this.pokemon2.getEstadisticas().salud > 0) ) {
      if (atacante == 1) {
        console.log(`»» Turno de ataque de ${this.pokemon1.getNombre()}`);
        this.pokemon2.setSalud(this.pokemon2.getEstadisticas().salud - this.calculoDañoInflingido(atacante));
        console.log(`»» La vida de ${this.pokemon2.getNombre()} ha bajado a: ${this.pokemon2.getEstadisticas().salud}\n`);
        atacante = 2;
      } else {
        console.log(`»» Turno de ataque de ${this.pokemon2.getNombre()}`);
        this.pokemon1.setSalud(this.pokemon1.getEstadisticas().salud - this.calculoDañoInflingido(atacante));
        console.log(`»» La vida de ${this.pokemon1.getNombre()} ha bajado a: ${this.pokemon1.getEstadisticas().salud}\n`);
        atacante = 1;
      }
    }

    if(this.pokemon1.getEstadisticas().salud <= 0) {
      console.log(`»»»» El ganador del combate es: ${this.pokemon2.getNombre()} «««« `);
      return this.pokemon2.getNombre();
    } else {
      console.log(`»»»» El ganador del combate es: ${this.pokemon1.getNombre()} ««««`);
      return this.pokemon1.getNombre();
    }
    
  }

}