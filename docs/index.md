# Práctica 5: Objetos, clases e interfaces.
## Desarrollo de Sistemas Informáticos - Universidad de La Laguna

### 1. Introducción.

El objetivo de esta práctica es desarrollar dos ejercicios de programación, por un lado la implementación de la Pokedex y UN sistema de combate Pokemón y por otro lado el desarrollo del juego del conecta 4 u 4 en raya y para resolverlos necesitamos conocer la utilización de objetos, clases e interfaces en TypeScript. 

### 2. Ejercicios

Antes de comenzar a la implementación de las soluciones de los dos problemas propuestos hay que añadir al entorno de trabajo de la práctica 5 las diversas herramientas que se ha utilizado en prácticas anteriores, estas son,[typedoc](https://typedoc.org/), [mocha](https://mochajs.org/), [chai](https://www.chaijs.com/) y [TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas). Además de que se recomienda utilizar los principios SOLID, Instabul y Coveralls para realizar el cubrimiento del código.
* [Principios SOLID]().
* [Instabul y Coveralls]().

#### 2.1 Ejercicio 1: Pokedex.
 
Para realizar la solución al enunciado propuesto en el [guión de la práctica 5](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/) correspondiente al ejercicio 1, se pide implementar las clases que sean necesarias para implementar por un lado, una [Pokedex](https://pokemon.fandom.com/es/wiki/Pok%C3%A9dex) que permita almacenar distintos [Pokemons](https://es.wikipedia.org/wiki/Pok%C3%A9mon) y registrarlos, pudiendo posteriormente buscar a cualquier Pokemón deseado dentro de la Pokedex. Y por otro lado, desarrollar un sistema de combate Pokemon que de un ganador basado en el daño aplicado a la vida del contrincante que se calcule en base a las estadísticas bases del Pokemon y a su Tipo elemental.

Para desarrollar la solución a este ejercicio, he decidido implementar 3 clases:

* La clase **Pokemon**:

La clase Pokemon encargada de definir el nombre, peso, altura, tipo y estadísticas bases, donde se encuentran el ataque, la defensa, la velocidad y la vida del Pokemón. De esta forma definimos estos atributos como privados y los inicializamos en el contructor posteriormente se desarrolla los metodos encargados de acceder a estos datos, que simplemente devuelve el atributo privado (Getters) y el método encargado de Establecer la vida (HP) del Pokemon, este método denominado *setSalud* recibe una vida calculada previamente y establece la vida actual como la vida que recibe la función. 

```TypeScript
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

  public getNombre() {
    return this.nombre;
  }

  public getPeso() {
    return this.peso;
  }

  public getAltura() {
    return this.altura;
  }

  public getTipo() {
    return this.tipo;
  }
  public getEstadisticas() {
    return this.Estadisticas;
  }

  public setSalud(puntosVida: number) {
    this.Estadisticas.salud = puntosVida;
  }
}

```

Para comprobar el funcionamiento de esta clase, realizamos diversos test donde primero creamos los Objetos de la clase, que serán nuevos Pokemons con sus valores según se recaba en el siguiente [enlace](https://pokemondb.net/pokedex/all) y se comprueba que el pokemon creado exista y no sea nulo y que cada atributo este inicializado con el valor correspondiente.

```TypeScript
import 'mocha';
import { expect } from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';

const Pachirisu: Pokemon = new Pokemon('Pachirisu', 3.9, 0.4, "electrico", [45, 70, 95, 60]);
const Typhlosion: Pokemon = new Pokemon('Typhlosion', 79.5, 1.7, "fuego", [84, 78, 100, 78]);
const Torterra: Pokemon = new Pokemon('Torterra', 310, 2.2, "hierba", [109, 105, 56, 95]);
const Buizel: Pokemon = new Pokemon('Buizel', 29.5, 0.7, "agua", [65, 35, 85, 55]);

describe('Tests de la clase Pokemon', ()=> {

  it('Test de instancia de la clase Pokemon',()=>{
    expect(Pachirisu).to.exist;
    expect(Pachirisu).to.not.null;
    expect(Typhlosion).to.exist;
    expect(Typhlosion).to.not.null;
    expect(Torterra).to.exist;
    expect(Torterra).to.not.null;
    expect(Buizel).to.exist;
    expect(Buizel).to.not.null;
  });

  it('Test de metodos Getters de la clase Pokemon', ()=> {

    expect(Pachirisu.getNombre()).to.be.eql("Pachirisu");
    expect(Typhlosion.getNombre()).to.be.eql("Typhlosion");
    expect(Torterra.getNombre()).to.be.eql("Torterra");
    expect(Buizel.getNombre()).to.be.eql("Buizel");

    expect(Pachirisu.getPeso()).to.be.eql(3.9);
    expect(Typhlosion.getPeso()).to.be.eql(79.5);
    expect(Torterra.getPeso()).to.be.eql(310);
    expect(Buizel.getPeso()).to.be.eql(29.5);

    expect(Pachirisu.getAltura()).to.be.eql(0.4);
    expect(Typhlosion.getAltura()).to.be.eql(1.7);
    expect(Torterra.getAltura()).to.be.eql(2.2);
    expect(Buizel.getAltura()).to.be.eql(0.7);


    expect(Pachirisu.getTipo()).to.be.eql("electrico");
    expect(Typhlosion.getTipo()).to.be.eql("fuego");
    expect(Torterra.getTipo()).to.be.eql("hierba");
    expect(Buizel.getTipo()).to.be.eql("agua");

    expect(Pachirisu.getEstadisticas().ataque).to.be.eql(45);
    expect(Torterra.getEstadisticas().defensa).to.be.eql(105);
    expect(Typhlosion.getEstadisticas().velocidad).to.be.eql(100);
    expect(Buizel.getEstadisticas().salud).to.be.eql(55);
  });

});

```

* La clase **Pokedex**:

La clase Pokedex es la encargada de almacenar una seríe de Pokemóns, por lo que tras importar la clase Pokemon explicada anteriormente, se establece como atributo privado un vector de Pokemons inicializado a cero. Y se definen los métodos publicos que permitan tanto devolver el vector de pokemons como añadir un nuevo elemento a ese vector denominado *"BaseDatosPokemon"*. 

También se define la función publica *buscarPokemon* que recibe el nombre del pokemon que se desea buscar y devuelve por un lado el Pokemon y su información si se encuentra un resultado o "undefined" si el pokemon no se encuentra en el vector que simula el funcionamiento de una Base de Datos de Pokemons. Basicamente su funcionamiento es utilizar una variable numerica y recorremos el vector si se encuentra el pokemon en el vector entonces igualamos esta variable numerica a la posicion donde se ha encontrado, en caso de no encontrarlo simplemente ponemos el valor a -1 y devolver undefined y finalmente devolvemos el elementos en la posicion encontrada.

Por último esta clase tiene la función publica  *mostarPokedex* que muestra por pantalla a tarvés de console log el vector de Pokemons almacenado que hay.


```TypeScript
import {Pokemon} from './pokemon';

export class Pokedex {

  constructor(private baseDatosPokemon: Pokemon[]){
    this.baseDatosPokemon = baseDatosPokemon;
  }

  public getPokedex() {
    return this.baseDatosPokemon;
  }

  public setPokedex(Pokemon: Pokemon) {
    this.baseDatosPokemon.push(Pokemon);
  }

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

  public mostrarPokedex() {
    console.log(`──────────────────────────────────────────────`);
    console.log(`	» Los Pokemons Recogidos en la Pokedex son:«`);
    console.log(this.baseDatosPokemon);
    console.log(`──────────────────────────────────────────────`);
  }

}

```

Para realizar las pruebas unitarias de este código se ha importado la clase desde el fichero correspondiente y se ha añadido los Pokemons creados en las pruebas unitarias de la clase Pokemon al vector de Pokemons a través del método *setInPokedex* y nos aseguramos que el vector correspondiente a la Base de Datos de la Pokedex exista, no este vacio y sea igual a un vector compuesto por los cuatro pokemons definidos. Además nos aseguramos que se encuentre por ejemplo al Pokemon "Buizel" en la Pokedex y finalmente mostramos por consola todos los Pokemons con su información que se hayan almacenado en la Pokedex.

```TypeScript
import 'mocha';
import { expect } from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Combat} from '../src/ejercicio-1/combat';


const Pachirisu: Pokemon = new Pokemon('Pachirisu', 3.9, 0.4, "electrico", [45, 70, 95, 60]);
const Typhlosion: Pokemon = new Pokemon('Typhlosion', 79.5, 1.7, "fuego", [84, 78, 100, 78]);
const Torterra: Pokemon = new Pokemon('Torterra', 310, 2.2, "hierba", [109, 105, 56, 95]);
const Buizel: Pokemon = new Pokemon('Buizel', 29.5, 0.7, "agua", [65, 35, 85, 55]);

const PokemonsInPokedex = new Pokedex([]);
PokemonsInPokedex.setPokedex(Pachirisu);
PokemonsInPokedex.setPokedex(Typhlosion);
PokemonsInPokedex.setPokedex(Torterra);
PokemonsInPokedex.setPokedex(Buizel);


describe ('Test de la clase Pokedex', () =>{

  it('Comprobación de la instancia de la Pokedex', ()=>{
    expect(PokemonsInPokedex.getPokedex()).to.exist;
    expect(PokemonsInPokedex.getPokedex()).to.not.null;
    expect(PokemonsInPokedex.getPokedex()).to.be.eql([Pachirisu, Typhlosion, Torterra, Buizel]);
  });

  it('Comprobación del método que busca Pokemons', ()=>{
    expect(PokemonsInPokedex.buscarPokemon(Buizel)).to.be.eql(Buizel);
  });

  it('Comprobación del método que visualiza la Pokedex', ()=>{
    PokemonsInPokedex.mostrarPokedex();
  });

});

```

* La clase **Combate**:

Para poder simular el combate entre los dos Pokemons se ha llevado a cabo la clase Combat que define al ganador del combate. Por lo que como atributo privado recibe a los dos Pokemons que se enfrentarán, *Pokemon1* y *Pokemon2* para esto importamos nuestra clase Pokemon creada previamente. Y definimos las funciones de las que se servirá para calcular el ganador del combate. 

Una es *CalculoDañoInflingido* donde reciclamos y modificamos el [ejercicio 8](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101130408/blob/main/src/pokemon.ts) llevado a cabo en la práctica 3 de la asignatura donde dependiendo del tipo del Pokemon se calculaba el daño inflingido a través de la fórmula especificada siendo esta: **"50 *( ataque/defensa) * efectividad "**. Por lo que modificamos esta función y en base al tipo del primer pokemon dependiendo del tipo del segundo pokemon modificamos el valor de la efectividad del ataque. Por ejemplo, si el pokemón inicial es de tipo fuego y el pokemon al que se enfrenta es de tipo hierba entonces la efectividad es de 2. Puesto que el fuego quema la Hierba. siguiendo esta logica definimos todos los casos posibles. Pero como los pokemons se turnan al atacar tenemos que ver si el Pokemon que ataca es el primero o el segundo ya que entonces cambiara la efectividad del ataque, en resumidas cuenta no es lo mismo que ataque el fuego a la hierba que la hierba al fuego. Por lo que a través de una variable numerica llamada _atacante_  miramos si el que ataca es el primer pokemon donde caculamos el daño de ataque del priemr pokemon y defensa del segundo pokemon y la efectividad prestablecida. En cambio de que el atacante sea el segundo pokemon entonces cambiamos la efectividad establecida si es 2 será 0.5 y si es 0.5 será 2 y calculamos el ataque del pokemon 2 entre la defensa del pokemon 1 de esta forma definimos los turnos.

La última función es la encargada de realizar el combate en base a las reglas establecidas. El Pokemon atacante al incio tal y como sucede en los juegos de la francquicia Pokemon, el atacante será aquel que tenga mayor velocidad por lo que comprobamos la velocidad de cada pokemon y establecemos en base a esta quien empieza atacando, posteriormente mientras la vida de ninguno de ellos llegue a 0 o a un valor menos se lanzan ataques por turnos. en el caso de que el Pokemon atacante sea el primero entonces establecemos la nueva vida del segundo Pokemon a través del método _setSalud_ donde el número que se le pasa es la vida actual del pokemon menos el daño Infligido por el atacante y mostramos la vida actual del Objetivo. Y de forma viceversa en caso de que el atacante sea el segundo Pokemon, de esta forma el primero a llegar a cero pierde el combate y su contrincante es considerado el Ganador.

```TypeScript
import { Pokemon } from "./pokemon";

export class Combat {

  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon){
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

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

  public combatePokemon(): string {
    let atacante: number = 1;
    if( this.pokemon1.getEstadisticas().velocidad >= this.pokemon2.getEstadisticas().velocidad) {
      atacante =  1;
    } else {
      if( this.pokemon1.getEstadisticas().velocidad < this.pokemon2.getEstadisticas().velocidad) {
        atacante =  2;
      }
    }
    
    console.log(`──────────────────────────────────────────────────────────────────`);
    console.log(`» ${this.pokemon1.getNombre()}  vs   ${this.pokemon2.getNombre()}`);
    console.log(`» Vida: ${this.pokemon1.getEstadisticas().salud}      » Vida: ${this.pokemon2.getEstadisticas().salud}`);
    console.log(`» Ataque: ${this.pokemon1.getEstadisticas().ataque}    » Ataque: ${this.pokemon2.getEstadisticas().ataque}`);
    console.log(`» Defensa: ${this.pokemon1.getEstadisticas().defensa}   » Defensa: ${this.pokemon2.getEstadisticas().defensa}`);
    console.log(`» Velocidad: ${this.pokemon1.getEstadisticas().velocidad} » Velocidad: ${this.pokemon2.getEstadisticas().velocidad}`);
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
```

Para las pruebas de esta clase necesitamos importar la clase Pokemon y definimos una nueva instancia de la clase Combat que será un combate entre dos Pokemons. Posteriormente, comprobamos que el daño Infligido sea el que se espera en ambos combates y que el ganador sea aquel que inflinge mayor daño al enemigo y haya hecho que su vida llegue a cero.

```TypeScript
import 'mocha';
import { expect } from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Combat} from '../src/ejercicio-1/combat';

const Pachirisu: Pokemon = new Pokemon('Pachirisu', 3.9, 0.4, "electrico", [45, 70, 95, 60]);
const Typhlosion: Pokemon = new Pokemon('Typhlosion', 79.5, 1.7, "fuego", [84, 78, 100, 78]);
const Torterra: Pokemon = new Pokemon('Torterra', 310, 2.2, "hierba", [109, 105, 56, 95]);
const Buizel: Pokemon = new Pokemon('Buizel', 29.5, 0.7, "agua", [65, 35, 85, 55]);

const combate1 = new Combat(Pachirisu, Buizel);
const combate2 = new Combat(Torterra, Typhlosion);


describe ('Test de la clase Combat', () =>{

  it('Comprobación del método que calcula el daño del combate 1', ()=>{
    expect(combate1.calculoDañoInflingido(1)).to.be.eql(128);
  });

  it('Comprobación del método que calcula el daño del combate 2', ()=>{
    expect(combate2.calculoDañoInflingido(1)).to.be.eql(34);
  });

  it('Comprobación del ganador del combate 1', ()=> {
    expect(combate1.combatePokemon()).to.be.eql('Pachirisu');
  });
  it('Comprobación del ganador del combate 2', ()=> {
    expect(combate2.combatePokemon()).to.be.eql('Torterra');
  });

});

```


#### 2.2 Ejercicio 2: Conecta 4.

Para solucionar el ejercicio 2 correspondiente a implementar el juego del conecta 4 en TypeScript he decidido implementar 2 clases:

* La clase **Tablero**:
Esta clase es la encargada de definir el tablero de juego del Conecta 4, recibe como parametros el numero de filas, de columnas y el valor inicial que contendra el tablero. Un tablero de conecta 4 esta formado por 6 filas y 7 columnas e inciialmente estará vacío. Para representar las fichas se usará el carácter 'X' para representar las fichas del jugador del equipo rojo y el caracter 'O' Para las fichas del jugador del equipo Amarillo. Posteriormente se realizan los métodos necesarios para realizar el funcionamiento del tablero.

Por un lado los metodos *initFilas* y *initColumnas* inicializan en nuestro vector de vectores de string denomiando tablero el tamaño de ambos vectores que definen a la matriz. Con el método *obtenerFilasLibres* recorremos desde el fondo del tablero si en la columna especificada existe previamente algún valor, en caso positivo se devuelve un -1 y en caso de que este vacío se devuelve esta posición. Esta función la utilizaremos en *colocarFicha* para comprobar que la posicion donde queremos colocar la ficha no este vacía. En caso de estar vacía se coloca la ficha en esa posición , en caso negativo accedemos a la siguiente posición.

Y con el método *contarNorte* inicializamos un contador y si en la posicion referente al norte (i-1)(j) de la ficha contamos si se encuentra alguno de los valores especificado

```TypeScript

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

  getFil(){
    return this.fil;
  }

  getCol() {
    return this.col;
  }

  private initFilas(filas: number): void | undefined {
    if (filas < 1) {
      return undefined;
    } else {
      for(let i: number = 0; i < filas; i++) {
        this.tablero.push(new Array<string>());
      }
    }
  }

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

  public getTablero() {
    return this.tablero;
  }

  public getValue(filas: number, columnas: number): string | undefined {
    if(filas < 0 || filas >= this.fil || columnas < 0 || columnas >= this.col) {
      return undefined;
    }
    return this.tablero[filas][columnas];
    
  }

  public imprimirTablero() {
    console.log(`Visualización del Tablero:`);
    console.log(this.tablero);
  }

  public obtenerFilaLibre(columna: number): number {
    for (let i:number = this.fil -1; i >= 0 ; i--) {
      if(this.tablero[i][columna] == '') {
        return i;
      }
    }
    return -1;
  }

  public colocarFicha(valor: string, columna:number): void | undefined {
    if( columna < 0 || columna >= this.col) {
      return undefined;
    }

    let filas: number = this.obtenerFilaLibre(columna);
    this.tablero[filas][columna] = valor;
    
  } 

  public limpiartableroVacio() {
    for(let i: number = 0; i < this.col; i ++) {
      let resultado: number = this.obtenerFilaLibre(i); 
      if (resultado != -1) {
        return 0;
      }
    }
    return 1;
  }

  public contarNorte() {
    let contador: number = 0;
    for(let i: number = this.fil-1; i >= 0 ; i++) {
      for(let j:number = 0; j < this.col; j++) {
        if((this.tablero[i-1][j] == 'x') || (this.tablero[i-1][j] == 'o')) {
          contador ++;
        }
      }
    }
  
    return contador;
  }

} 
```

Para implementar los test de la clase Tablero lo que hacemos es definir un tablero de juego de tamaño 6x7 y comprobamos que se crea correctamente y todas las posiciones tengan un valor y no sean **Null**.

```TypeScript

```


* Clase **Partida**:



### Problemas y Soluciones.

* No he podido terminar el ejercicio 2 de la práctica puesto que no calcula bien los vecinos en las posiciones vertical, horizontal y diagonal. Por lo que el programa no llega a calcular cuando coinciden 4 fichas juntas. Sin embargo, la instancia de un tablero y la capacidad de almacenar  y colocar fichas primero en las posiciones más bajas de la matriz se ha probado y implementado correctamente. 


### Bibliografía.
* [Guión de la Práctica 4](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/)
* [Teoría de la asignatura - de Objetos, clases e interfaces](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-objects-classes-interfaces.html)
* [Desarrollo dirigido por pruebas TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas)
* [GUía de Pokemon empleado para sus calculos](https://pokemondb.net/pokedex/all)
* [Github](https://github.com/)
* [Objetosy clases en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
---
Autor: Joel Francisco Escobar Socas - 2021/2022.
---