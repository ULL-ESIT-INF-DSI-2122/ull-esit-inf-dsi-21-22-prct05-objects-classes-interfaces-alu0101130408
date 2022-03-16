import 'mocha';
import {expect} from 'chai';
import {Ficha} from '../src/ejercicio-2/ficha';
import {Tablero} from '../src/ejercicio-2/tablero'

const ficha1: Ficha =  new Ficha(1, 'amarilla');
const tablero: Tablero =  new Tablero(6,7,0);
describe('Test de la clase Ficha', ()=> {
  it ('Instancia de una ficha', ()=>{
    expect(ficha1).to.exist;
    expect(ficha1).not.null;
  });

});

describe('Test de la clase Tablero', ()=> {
  it ('Instancia de una ficha', ()=>{
    expect(tablero).to.exist;
    expect(tablero).not.null;
  });

  it('Mostrar el tablero', ()=> {
    tablero.imprimirTablero();
  });

});
