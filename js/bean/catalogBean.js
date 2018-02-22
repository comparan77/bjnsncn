//**Usuario */
var BeanUsrData = function(persona, direccion) {
    this.Persona = persona;
    this.Direccion = direccion;
    this.UrlHandler;
};

var BeanPersona = function(nombre, paterno, materno) {
    this.Nombre = nombre;
    this.Paterno = paterno;
    this.Materno = materno;
    this.Cumpleanio;
}

var BeanDireccion = function(cp, estado, municipio, callenum) {
    this.CP = cp;
    this.Estado = estado;
    this.Municipio = municipio;
    this.CalleNum = callenum;
}

var BeanPlatillo = function(categoria, platillo, precio) {
    this.Categoria = categoria;
    this.Platillo = platillo;
    this.Precio = precio;
}