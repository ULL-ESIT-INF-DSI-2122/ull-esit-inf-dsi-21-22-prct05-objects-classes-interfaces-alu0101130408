import 'mocha';
import {expect} from 'chai';
import {Ficha} from '../src/ejercicio-2/ficha';
import {Tablero} from '../src/ejercicio-2/tablero'
import {Partida} from '../src/ejercicio-2/partida';

const ficha1: Ficha =  new Ficha(1, 'amarilla');
const tablero: Tablero =  new Tablero(6,7,'');

tablero.colocarFicha('x', 2);
tablero.colocarFicha('x', 2);
tablero.colocarFicha('x', 3);
tablero.colocarFicha('x', 3);



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
    const valorNorte = tablero.contarNorte();
   
    console.log(`El valor del norte es: ${valorNorte}`);

  });

});
