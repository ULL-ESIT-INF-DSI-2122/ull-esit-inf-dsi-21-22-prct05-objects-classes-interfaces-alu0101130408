import 'mocha';
import {expect} from 'chai';
import {Tablero} from '../src/ejercicio-2/tablero'
import {Partida} from '../src/ejercicio-2/partida';

const tablero: Tablero =  new Tablero(6,7,'');

tablero.colocarFicha('x', 2);
tablero.colocarFicha('x', 2);
tablero.colocarFicha('x', 3);
tablero.colocarFicha('x', 3);

describe('Test de la clase Tablero', ()=> {
  it ('Instancia de un Tablero de juego de dimensiones 6x7', ()=>{
    expect(tablero).to.exist;
    expect(tablero).not.null;
  });

  it('Mostrar el tablero', ()=> {
    
    tablero.imprimirTablero();
    const valorNorte = tablero.contarNorte();
   
    console.log(`El valor del norte es: ${valorNorte}`);

  });

});
