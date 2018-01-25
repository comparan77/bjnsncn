function CatalogosModel() {}

/**Usuarios */
CatalogosModel.UsuarioCredencialesValidas = function (obj, callback) {
    var url = urlHandler + 'handlers/CAEApp.ashx?op=usuario&opt=CredencialesValidas';
    try {
        var opts = '';
        Common.fetchJSONFile(
            url, 
            function(data) {
                callback(data);
            }, 
            'POST',
            JSON.stringify(obj)
        );
    } catch (error) {
        alert(error);
    }
}

CatalogosModel.valida_cp = function(obj, callback, error) {
    var url = 'https://api-codigos-postales.herokuapp.com/v2/codigo_postal/' + obj;
    try {
        Common.fetchJSONFile(
            url, 
            function(data) {
                callback(data);
            }, 
            function(msg) {
                error(msg);
            },
            'GET'
        );
    } catch (error) {
        console.log(error);
    }
}