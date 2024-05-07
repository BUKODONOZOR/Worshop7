function Producto(Tipo,Nombre,CantidadDisponible,Stock,PuntosNecesarios){
    this.Tipo = Tipo;
    this.Nombre = Nombre;
    this.CantidadDisponible = CantidadDisponible;
    this.Stock = Stock; 
    this.PuntosNecesarios = PuntosNecesarios; 


}


Producto.prototype.obtenerInfo = function(){
    console.log("Nombre : " + this.Nombre  + "Cantidad Disponible : " + this.CantidadDisponible + "Stock :" + this.Stock);
}

function ProductoFisico(Precio ,Nombre,CantidadDisponible,Stock,PuntosNecesarios){
    Producto.call(this,"Fisico", Nombre, CantidadDisponible , Stock ,PuntosNecesarios);
    this.Precio = Precio

}

ProductoFisico.prototype = Object.create(Producto.prototype);
ProductoFisico.prototype.constructor =ProductoFisico ; 

let Salchipapa = new ProductoFisico(100,"Salchipapa",10,true,1000)


console.log(Salchipapa)

function ProductoDigital(Url ,Nombre,CantidadDisponible,Stock,PuntosNecesarios){
    Producto.call(this,"Fisico", Nombre, CantidadDisponible , Stock ,PuntosNecesarios);
    this.Url = Url
}

let PaseLol = new ProductoDigital("asasdsssssssss","Pase de LOL" ,1000,true ,10000);
console.log(PaseLol)


function Persona(nombre, email, clave) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}
  
Persona.prototype.saludar = function () {
    return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
};

function Usuario(nombre, email, clave,puntosacomulados) {
    Persona.call(this, nombre, email, clave);
    this.puntosacomulados = puntosacomulados;
}

function Administrador(nombre, email, clave) {
    Persona.call(this, nombre, email, clave);

}
  
Usuario.prototype = Object.create(Persona.prototype);
Usuario.prototype.constructor = Usuario;
  
Usuario.prototype.acomularpuntos = function () {
    console.log("Estoy acomulando.");
};

Usuario.prototype.canjearpuntos = function () {
    console.log("Estoy acomulando.");
};
Usuario.prototype.saludar = function () {
    return `${Persona.prototype.saludar.call(this)} Y soy un estudiante.`;
};



Administrador.prototype.agregarproducto = function () {
    console.log("Estoy agregando.");
};

Administrador.prototype.eliminarproducto = function () {
    console.log("Estoy eliminando.");
};


Administrador.prototype.eliminarusuario = function () {
    console.log("Estoy eliminando usuario.");
};


