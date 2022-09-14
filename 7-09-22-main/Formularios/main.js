const nombres = document.querySelector("#inputNames");
const edad = document.querySelector("#inputAge");
const correo = document.querySelector("#inputEmail");
const ciudad = document.querySelector("#inputCity");
const politicaData = document.querySelector("#checkPolitica");
const formulario = document.querySelector("#form");
//validadcion de Formulario

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validfieldsForm() === -1){
        alert("good enviando formulario");
    }else{
        alert("Error en formulario");
    }
});

const validfieldsForm =()=>{
    const values = Object.values(validfields);
    let response = values.findIndex(e => e === false);
    return response;
}
//objeto de validacion

let validfields = {
    nom:false,
    edad:false,
    mail:false,
    ciud:false,
    politica:false
}
nombres.addEventListener('change',(event)=>{
    const inputNombre = event.target.value;
    const patronNombres = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Tenario 
    validfields.nom = inputNombre.match(patronNombres) ? true : false;
    console.log(Object.values(validfields));

});
edad.addEventListener('change', function(e){
    console.log('en edad');
    const patronEdad =/(^[0-9]{1,2}$)/g;
    if(parseInt(edad.value) >= 18){
        if (edad.value.match(patronEdad)){
            validfields.edad = true;
        }else{
            alert("error en edad");
        }
        }else{
        alert("error em edad");
    }
    console.log(Object.values(validfields));
});

politicaData.addEventListener('change',(e)=>{
    validfields.politica = politicaData.checked === true ? true : false;
    console.log(Object.values(validfields));
});
correo.addEventListener('change',(event)=>{
    const inputCorreo = event.target.value;
    const patronCorreos = /.+\@.+\..+/;
    validfields.mail = inputCorreo.match(patronCorreos) ? true : false;
    console.log(Object.values(validfields));
});
ciudad.addEventListener('')