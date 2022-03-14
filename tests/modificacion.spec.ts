import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/modificacion';
import {Estudiante} from '../src/modificacion';
import {Profesor} from '../src/modificacion';
import {Asignatura} from '../src/modificacion';

describe('Test de la Clase Persona', ()=>{
    const persona1 =  new Persona('Manolo', 'García', '06/08/1996', 'masculino');
    it ('pruebas de instancia de la clase persona', () => {
        expect(persona1).to.exist;
    });
    it ('pruebas de metodos de la clase persona', () => {
        expect(persona1.getName()).to.be.eql('Manolo');
        expect(persona1.getApellido()).to.be.eql('García');
        expect(persona1.getNacimiento()).to.be.eql('06/08/1996');
        expect(persona1.getGenero()).to.be.eql('masculino');
    });
});

describe('Test de la clase Estudiante', ()=>{
    const estudianteIng = new Estudiante('Jairo', 'Gonzalez', '12/05/2001', 'masculino', 'alu010101150609@ull.edu.es');
    it('pruebas de instancia de la clase estudiante', ()=>{
        expect(estudianteIng).to.exist;
    });
    it ('pruebas de metodos de la clase Estudiante', () => {
        expect(estudianteIng.getName()).to.be.eql('Jairo');
        expect(estudianteIng.getApellido()).to.be.eql('Gonzalez');
        expect(estudianteIng.getNacimiento()).to.be.eql('12/05/2001');
        expect(estudianteIng.getGenero()).to.be.eql('masculino');
        expect(estudianteIng.getCorreo()).to.be.eql('alu010101150609@ull.edu.es');
    });
});

describe('Test de la clase Profesor', ()=>{
    const profesoraDSI = new Profesor('Elena', 'Marrero', '06/10/1965', 'femenino', 'elemar@ulll.edu.es', 678997521);
    it('pruebas de instancia de la clase Profesora', ()=>{
        expect(profesoraDSI).to.exist;
    });
    it ('pruebas de metodos de la clase Profesora', () => {
        expect(profesoraDSI.getName()).to.be.eql('Elena');
        expect(profesoraDSI.getApellido()).to.be.eql('Marrero');
        expect(profesoraDSI.getNacimiento()).to.be.eql('06/10/1965');
        expect(profesoraDSI.getGenero()).to.be.eql('femenino');
        expect(profesoraDSI.getCorreo()).to.be.eql('elemar@ulll.edu.es');
        expect(profesoraDSI.getTlfn()).to.be.eql(678997521);
    });
});


describe('Test de la clase Asignatura', ()=>{
    const estudianteIng1 = new Estudiante('Jairo', 'Gonzalez', '12/05/2001', 'masculino', 'alu010101150609@ull.edu.es');
    const estudianteIng2 = new Estudiante('Joel', 'Escobar', '28/03/1999', 'masculino', 'alu010101130408@ull.edu.es');
    const estudianteIng3 = new Estudiante('Lara', 'Hernandez', '12/05/2001', 'femenino', 'alu010101150609@ull.edu.es');
    const profesoraDSI = new Profesor('Elena', 'Marrero', '06/10/1965', 'femenino', 'elemar@ulll.edu.es', 678997521);
    const asignaturaDSI = new Asignatura([estudianteIng1, estudianteIng2], [profesoraDSI]);
    it('pruebas de instancia de la clase Asignatura', ()=>{
        expect(asignaturaDSI).to.exist;
    });
    it ('pruebas de metodos de la clase Asignatura', () => {
        expect(asignaturaDSI.getAlumnos()).to.be.eql([estudianteIng1, estudianteIng2]);
        expect(asignaturaDSI.getprofesores()).to.be.eql([profesoraDSI]);
    });
});
