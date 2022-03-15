import 'mocha';
import { expect } from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Pokedex} from '../src/ejercicio-1/pokedex';
// import {Combat} from '../src/ejercicio-1/combat';


const Pachirisu: Pokemon = new Pokemon('Pachirisu', 3.9, 0.4, "electrico", [45, 70, 95, 60]);
const Typhlosion: Pokemon = new Pokemon('Typhlosion', 79.5, 1.7, "fuego", [84, 78, 100, 78]);
const Torterra: Pokemon = new Pokemon('Torterra', 310, 2.2, "hierba", [109, 105, 56, 95]);
const Buizel: Pokemon = new Pokemon('Buizel', 29.5, 0.7, "agua", [65, 35, 85, 55]);

const PokemonsInPokedex = new Pokedex([]);
PokemonsInPokedex.setPokedex(Pachirisu);
PokemonsInPokedex.setPokedex(Typhlosion);
PokemonsInPokedex.setPokedex(Torterra);
PokemonsInPokedex.setPokedex(Buizel);

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
    expect(Typhlosion.getPeso()).to.be.eql(79.5);
    expect(Buizel.getTipo()).to.be.eql("agua");
    expect(Pachirisu.getEstadisticas().ataque).to.be.eql(45);
    expect(Torterra.getEstadisticas().defensa).to.be.eql(105);
  });

});


describe ('Test de la clase Pokedex', () =>{

  it('Comprobación de la instancia de la Pokedex', ()=>{
    expect(PokemonsInPokedex.getPokedex()).to.exist;
    expect(PokemonsInPokedex.getPokedex()).to.not.null;
  });

  it('Comprobación del método que busca Pokemons', ()=>{
    expect(PokemonsInPokedex.buscarPokemon(Buizel)).to.be.eql(Buizel);
  });

  it('Comprobación del método que visualiza la Pokedex', ()=>{
    PokemonsInPokedex.mostrarPokedex();
  });


});