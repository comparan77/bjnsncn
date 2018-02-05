var ConfigController = function() {
    this.Init = init;
    var txt_url;
    var btn_save;
    var wzrd_config;

    function initControles () {
        // wzrd_config = new Wizard({
        //     content: 'wzrd_config',
        //     maxStep: 3
        // });
        // wzrd_config.open();
        // wzrd_config.setStepValid(1);
        // wzrd_config.enabledBtnNext();
        
        reg_datos_per();    

        btn_valida_cp_click();
    }

    function init() {
        initControles();
    }

    function reg_datos_per() {
        var txt_nombre = document.getElementById('txt_nombre');
        var txt_paterno = document.getElementById('txt_paterno');
        var txt_validate;
        var arrTxt = ['txt_nombre', 'txt_paterno', 'txt_materno']
        var arrTxtForValidate = [];
        for (var i = 0; i < arrTxt.length; i++) {
            txt_validate = document.getElementById(arrTxt[i]);
            var txtForVaidate = {
                id: arrTxt[i],
                valid: false    
            }
            arrTxtForValidate.push(txtForVaidate);
            txt_validate.addEventListener('blur', function() {
                var id = this.getAttribute('id');
                var objTxt = arrTxtForValidate.filter(function (obj) {
                    return obj.id == id;
                });
                objTxt[0].valid = this.value.length > 3;

                var isValidNextStep = arrTxtForValidate.filter(function (obj) {
                    return obj.valid == true;
                }).length == arrTxtForValidate.length;    
                
                if(isValidNextStep) {
                    // wzrd_config.setStepValid(2);
                    // wzrd_config.enabledBtnNext();
                }
                else
                    console.log('invalido');
            });
        }
        // txt_nombre.addEventListener('blur', function() {
        //     wzrd_config.setStepValid(2);
        //     wzrd_config.enabledBtnNext();
        // });
    }

    function btn_valida_cp_click() {
        var btn_valida_cp = document.getElementById('btn_valida_cp');
        btn_valida_cp.addEventListener('click', function() {
            var txt_cp = document.getElementById('txt_cp');
            var lbl_estado = document.getElementById('lbl_estado');
            var lbl_municipio = document.getElementById('lbl_municipio');
            var ddl_colonia = document.getElementById('ddl_colonia');

            lbl_estado.innerHTML = '';
            lbl_municipio.innerHTML = '';
            ddl_colonia.innerHTML = '';

            CatalogosModel.valida_cp(txt_cp.value, function(data){
                lbl_estado.innerHTML = data.estado;
                lbl_municipio.innerHTML = data.municipio;
                var arrCol = [];
                for(var i = 0; i < data.colonias.length; i++) {
                    var col = {
                        datatext: data.colonias[i],
                        datavalue: data.colonias[i]
                    }
                    arrCol.push(col);
                }
                Common.fillSelect('ddl_colonia', arrCol);
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