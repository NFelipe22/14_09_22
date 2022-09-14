class Datos {

    constructor(){
        this.datos = [];   
        this.getApi(); 
    }

    getDatos(){
        return this.datos;
    }
    //metodo
    async getApi(){
        this.datos = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(respuesta => respuesta.json())
        .then((response) => {
            for(let i of response){
                this.datos.push(i.title);
            }
            return this.datos;
        })
        .catch((error) =>(console.error(error)))
        .finally(console.log("Ha finalizado la peticion"));
    }
}
export {Datos};