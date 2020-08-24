class Materia{
    constructor(nombre, clasificacion,componentes){
        this.nombre = nombre;
        this.clasificacion = clasificacion;
        this.componentes = componentes;
    }//fin del constructor
    Crear() {
        console.log(`Creando material ${this.nombre}, ${this.clasificacion}, ingredientes ${this.componentes}`);
        return this;
    } // fin crear
    Buscar() {
        console.log('El material se esta buscando...!');
        return this;
    } // fin Buscar

    Mostrar() {
        console.log('Mostrando material');
        console.log('Material listo para leer');
        return this;
    } // fin Mostrar
    

}//fin de la clase
const MaterialOrganico = new Materia("Organico","Caneca verde", ["Frutas", "Verduras", "plantas"]);
console.log(MaterialOrganico.Crear())
console.log(MaterialOrganico.Buscar())
console.log(MaterialOrganico.Mostrar())

console.log("--------------------------------------------------")

const MaterialInorganico = new Materia("Inorganico","Caneca amarilla", ["Plastico", "Vidrios", "Pilas", "Baterias"]);
console.log(MaterialInorganico.Crear())
console.log(MaterialInorganico.Buscar())
console.log(MaterialInorganico.Mostrar())