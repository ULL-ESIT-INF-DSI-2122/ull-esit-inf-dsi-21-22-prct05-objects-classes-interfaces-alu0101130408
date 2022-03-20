import 'mocha';
import {expect} from 'chai';
import {Tablero} from '../src/ejercicio-2/tablero'
import {Partida} from '../src/ejercicio-2/partida';

const tablero1: Tablero =  new Tablero(6,7,'');
const tablero2: Tablero =  new Tablero(6,7,'');

const Game1: Partida =  new Partida('Alfonso', 'Jaime', tablero2)

describe('Test de la clase Tablero', ()=> {
  it ('Instancia de un Tablero de juego de dimensiones 6x7', ()=>{
    expect(tablero1).to.exist;
    expect(tablero1).not.null;
    expect(tablero2).to.exist;
    expect(tablero2).not.null;
  });

  it('Comprobacion de las funciones y metodos de la clase Tablero', ()=> {
    tablero1.colocarFicha('X', 2);
    tablero1.colocarFicha('X', 2);
    tablero1.colocarFicha('X', 3);
    tablero1.colocarFicha('X', 3);
    tablero1.imprimirTablero();
  });

});
/*
describe('Test de la clase Partida', ()=> {
  it ('Instancia de un juego entre Alfonso y Jaime', ()=>{
    expect(Game1).to.exist;
    expect(Game1).not.null;
  });

  it('Comprobacion de las funciones y metodos de la clase Partida', ()=> {
    expect(Game1.inicioJuego(tablero2)).to.be.eql('Alfonso');
  });

});
*/