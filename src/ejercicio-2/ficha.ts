/**
 * 
 * 
 * 
 */

export class Ficha {
    constructor(private color: string){
        this.color = color;
    }

    /**
     * Funcion que devuelve la ficha
     * @returns El color del equipo al que pertence la ficha.
     */
    getColor() {
        return this.color;
    }

    /**
     * Funcion que establece el equipo de una ficha
     * @param colorEquipo color del equipo al que pertenece la ficha
     */
    setColor(colorEquipo: string) {
        this.color = colorEquipo;
    }   

}