function Person(nombre, apellido, edad, profesión, hobbies) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesión = profesión;
    this.hobbies = hobbies;
  }
  
  Person.prototype.saludar = function () {
    return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
  };