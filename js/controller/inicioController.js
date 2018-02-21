var Inicio = function() {
    this.Init = init;

    function initControles () {
        OperationModel.loadMenu(function(data){
            console.log(JSON.stringify(data.hoja));
        }, function(err) {
            console.log(err.message);
        });
    }

    function init() {
        initControles();
    }
}