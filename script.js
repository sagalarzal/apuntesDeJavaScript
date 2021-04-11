//feclarativa
function miFuncion () {
    return 3;
}
var a =1;
var b =3;
//expresiva o anonima
var miFuncionExpresiva = function() {
    return a + b;
}
function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

var miNombre = "Sergio";
function miNombreCompleto () {
    var miApellido = "Galarza";
    var miNombre = "El Sergio"
    console.log(miNombre + " " + miApellido);
}

if (0) {
    console.log("true en el primer if");
}
else if (true) {
    console.log("true en el segundo if");
}
else {
    console.log("ningun true se cumplio");
}

var numero17 = 1;
var resultado17 = numero17 ===1 ? "si soy 1" : "No soy uno";
console.log(resultado17);

switch (2) {
    case 1:
        console.log("soy uno");
        // break;
    case 2:
        console.log("soy dos");
        // break;
    case 3:
        console.log("soy tres");
        // break;
}

var frutas = ["manzana", "pera", "papaya"]
console.log(frutas);
console.log(frutas.length);
console.log(frutas[1]);
//los metodos modifican el original
var masFrutas = frutas.push("Uvas"); //agrega al final
console.log(frutas);
var ultimo = frutas.pop(); //elimina al final
console.log(frutas);
var nuevaLongitud = frutas.unshift("Banano"); //agrega al inicio
console.log(frutas);
var borrarFruta = frutas.shift(); //elimina al inicio
console.log(frutas);
var posicion = frutas.indexOf("pera")
console.log(posicion);

for (var i=0; i < frutas.length; i++){
    console.log("la fruta " + (i + 1) + " es " + frutas[i]);
}

var estudiantes = ["Sergio", "Maria", "Pepe"];
for (var estudiante of estudiantes) {
    console.log(estudiante);
}

while (estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};
miAuto.detalleDelAuto();

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto ("Nissan", "Tida", 2021);
var autoNuevo2 = new auto ("Tesla", "Model 3", 2021);
var autoNuevo3 = new auto ("Toyota", "Corolla", 2021);

//los metodos NO modifican el original
var articulos = [
    {monbre: "bici", costo: 3000},
    {monbre: "tv", costo: 40000},
    {monbre: "perro", costo: 10},
    {monbre: "pollo", costo: 100}
]

var filtro = articulos.filter(function(articulo){
return articulo.costo <= 500
});
console.log(filtro);

var miMap = articulos.map(function(articulo){ //concatena todos los monbres
    return articulo.monbre;
});
console.log(miMap);

var miFind = articulos.find(function(articulo){ //busca el perro. el primer perro y ya
    return articulo.monbre === "perro"
})

articulos.forEach(function(articulo){ //ejecuta la funcion para todos
    console.log(articulo.monbre);
});

var articulosBaratos = articulos.some(function(articulo){ //revisa si se cumple la funcion para al menos uno de los elementos
    return articulo.costo <= 700;
});

