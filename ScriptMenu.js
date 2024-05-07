function Persona(nombre, email ,clave){
    this.nombre = nombre;
    this.email = email;
    this.clave =clave;
}

function Repartidor(nombre, email ,clave,vehiculo , disponibilidad){
    Persona.call(this,nombre,email,clave);
    this.vehiculo = vehiculo;
    this.disponibilidad = disponibilidad;
}


Repartidor.prototype.aceptarPedido = function(){
    console.log("Pedido Aceptado");
}

Repartidor.prototype.ActualizarUbicación = function(ubicación){
    console.log("La ubicación es : ",ubicación);
}

Repartidor.prototype.CompletarEntrega = function(){
    console.log("Pedido Entregado");
}

Repartidor.prototype.ActualizarEstado = function(estado){
    console.log("El estado es : " , estado )
}


Repartidor.prototype.Autenticacion = function(){
    console.log("Autenticacion completa :")
}


function Usuario(nombre , email , clave , direccion, telefono){
    Persona.call(this , nombre , email , clave );
    this.direccion = direccion; 
    this.telefono = telefono;
}


Usuario.prototype.Realizarpedido = function(){
    console.log("Pedido realizado");
}


Usuario.prototype.verhistorial = function(historiar){
    console.log("Ver historiar de pedidso : ", historiar);
}

Usuario.prototype.Autenticacion = function(){
    console.log("Autenticacion completa :")
}



function Plato(nombre, precio, ingredientes){
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;

}

Plato.prototype.Actualizarestado  = function(estado){
    console.log("El estado actual es " , estado);
}


function Menu(plato){
    this.plato = plato;
}

function MenuQr(plato, Qr){
    Menu.call(this, plato);
    this.Qr = Qr;
}

MenuQr.prototype.generalQr = function(){
    console.log("General Qr");
}

function MenuFisico(plato){
    Menu.call(this, plato);
}

MenuFisico.prototype.impresion = function(){
    console.log("Impresion");
}

MenuFisico.prototype.visualizacion = function(){
    console.log("visualizacion");
}

