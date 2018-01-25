var ConfigController = function() {
    this.Init = init;
    var txt_url;
    var btn_save;
    var wzrd_config;

    function initControles () {
        wzrd_config = new Wizard({
            content: 'wzrd_config',
            maxStep: 3
        });
        wzrd_config.open();
        wzrd_config.setStepValid(1);
        wzrd_config.enabledBtnNext();

        reg_datos_per();

        btn_valida_cp_click();
    }

    function init() {
        initControles();
    }

    function reg_datos_per() {
        var txt_nombre = document.getElementById('txt_nombre');
        txt_nombre.addEventListener('blur', function() {
            wzrd_config.setStepValid(2);
            wzrd_config.enabledBtnNext();
        });
    }

    function btn_valida_cp_click() {
        var btn_valida_cp = document.getElementById('btn_valida_cp');
        btn_valida_cp.addEventListener('click', function() {
            var txt_cp = document.getElementById('txt_cp');
            CatalogosModel.valida_cp(txt_cp.value, function(data){
                console.log(data.colonias[0]);
            });
        });
    }

    function btn_save_click() {
        btn_save.addEventListener('click', function() {
            urlHandler = txt_url.value;
            localStorage.setItem('urlHandler', urlHandler);
            Common.notificationAlert('La configuración se ha guardado correctamente.', 'Info', 'Ok');
        });
    }
}