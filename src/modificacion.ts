/**
 *  Clase Persona que implementa los datos básicos de una persona
 *  @param nombre Nombre de una persona 
 * 	@param apellido Apepllido de una persona
 * 	@param nacimiento Fecha de nacimiento de una persona
 *  @param genero genero de una persona 
 */
//  Clases requeridas: Persona, alumno , profesor y asignatura.

export class Persona {
	private nombre: string;
	private apellido: string;
	private nacimiento: string;
	private genero: string;

	constructor(nombre: string, apellido: string, fechaNacimiento: string, genero:string) {
		this.nombre  = nombre;
		this.apellido =  apellido;
		this.nacimiento = fechaNacimiento;
		this.genero =  genero;
	}

	 getName() {
		 return this.nombre;
	 }
	 setName(name: string) {
		this.nombre = name;
	 }

	 getApellido() {
		return this.apellido;
	}
	setApellido(apellido: string) {
	 this.apellido = apellido;
	}

	getNacimiento() {
		return this.nacimiento;
	}
	setNacimiento(fecha: string) {
	 this.nacimiento = fecha;
	}
	getGenero() {
		return this.genero;
	}
	setGenero(genero: string) {
	 this.genero = genero;
	}
}

/**
 * Clase que hereda de la clase Persona
 * @param nombre nombre del estudiante
 * @param apellido apelldio del estudiante
 * @param  del estudiante
 * 
 */

export class Estudiante extends Persona {
	constructor(nombre: string, apellido: string, nacimiento: string, genero:string, private correo: string){
		super(nombre, apellido, nacimiento, genero);
		this.correo = correo;
	}
	getCorreo() {
		return this.correo;
	}
	setCorreo(correoElectronico: string) {
		this.correo = correoElectronico;
	}

}
/**
 * 
 * 
 * 
 */
export class Profesor extends Persona {

	constructor(nombre: string, apellido: string, nacimiento: string, genero:string, private correo: string, private telefono: number){
		super(nombre, apellido, nacimiento, genero);
		this.correo = correo
		this.telefono = telefono;
	}
	getCorreo() {
		return this.correo;
	}
	setCorreo(correoElectronico: string) {
		this.correo = correoElectronico;
	}

	getTlfn() {
		return this.telefono;
	}
	setTlfn(numero: number) {
		this.telefono = numero;
}}

/**
 * 
 * 
 */

export class Asignatura {
	constructor(public alumnos: Estudiante[], public profesores: Profesor[]){
		this.alumnos = alumnos;
		this.profesores= profesores;
	}

	getAlumnos(): Estudiante[] {
		return this.alumnos;
	}
	setAlumnos(alumnoAsig: Estudiante) {
			this.alumnos.push(alumnoAsig);
		
	}

	getprofesores(): Profesor[] {
		return this.profesores;
	}
	setProfesores(profesorAsig: Profesor) {
		this.profesores.push(profesorAsig);
	}
}