//**Usuario */
var BeanUsrData = function(persona, direccion, urlHandler) {
    this.Persona = persona;
    this.Direccion = direccion;
    this.UrlHandler = urlHandler;
};

var BeanPersona = function(nombre, paterno, materno) {
    this.Nombre = nombre;
    this.Paterno = paterno;
    this.Materno = materno;
    this.Cumpleanio;
}

var BeanDireccion = function() {
    this.Calle;
    this.NoInt;
    this.NoExt;
}