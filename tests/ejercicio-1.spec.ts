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

const combate1 = new Combat(Pachirisu, Buizel);
const combate2 = new Combat(Torterra, Typhlosion);

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