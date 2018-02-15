var ConfigController = function() {
    this.Init = init;
    var txt_url;
    var btn_save;
    var wzrd_config;
    var txt_nombre;
    var txt_paterno;
    var txt_materno;
    var txt_cp;
    var lbl_estado;
    var lbl_municipio;
    var ddl_colonia;
    var txt_callenum;

    function initControles () {
         wzrd_config = new Wizard({
             content: 'wzrd_config',
             maxStep: 3
        });
        wzrd_config.open();
        wzrd_config.setStepValid(1);
        wzrd_config.enabledBtnNext();

        txt_nombre = document.getElementById('txt_nombre');
        txt_paterno = document.getElementById('txt_paterno');
        txt_materno = document.getElementById('txt_materno');

        txt_cp = document.getElementById('txt_cp');
        lbl_estado = document.getElementById('lbl_estado');
        lbl_municipio = document.getElementById('lbl_municipio');
        ddl_colonia = document.getElementById('ddl_colonia');
        txt_callenum = document.getElementById('txt_callenum');

        btn_save = document.getElementById('btn_save');

        reg_datos_per();
        btn_valida_cp_click();
        btn_save_click();
    }

    function init() {
        initControles();
    }

    function reg_datos_per() {
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
                    var idxTxt;
                    arrTxtForValidate.filter(function (obj, i) {
                        if (obj.id == id) {
                            idxTxt = i;
                        }
                    });
                arrTxtForValidate[idxTxt].valid = this.value.length >= 2;
                var isValidNextStep = arrTxtForValidate.filter(function (obj) {
                    return obj.valid == true;
                }).length == arrTxtForValidate.length;
                if(isValidNextStep) {
                    wzrd_config.setStepValid(2);
                    wzrd_config.enabledBtnNext();          
                }
            });
        }
    }

    function btn_valida_cp_click() {
        var btn_valida_cp = document.getElementById('btn_valida_cp');
        btn_valida_cp.addEventListener('click', function() {

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
            try {
                var oBeanPersona = new BeanPersona(
                    txt_nombre.value,
                    txt_paterno.value,
                    txt_materno.value
                );
                var oBeanDireccion = new BeanDireccion(
                    txt_cp.value,
                    lbl_estado.innerHTML,
                    lbl_municipio.innerHTML,
                    txt_callenum.value
                );
                usr_data = new BeanUsrData(
                    oBeanPersona,
                    oBeanDireccion
                );
                ConfigController.writeUsrData(JSON.stringify(usr_data), function() {
                    Common.notificationAlert('La información ha sido guardada correctamente.', 'Info', 'Ok'); 
                    Menu.changeOpt('inicio');
                });
            } catch (err) {
                console.log(err.message);
            }
        });
    }
}

ConfigController.writeUsrData = function(url, callback) {
    Common.CreateFile(USR_DATA_FILE_NAME, false, function(obj) {
        Common.writeFile(obj, url, false, function() {
             if(callback) callback();
        });
    });
}

ConfigController.readUsrData = function(callback) {
    Common.CreateFile(USR_DATA_FILE_NAME, false, function(obj) { 
        return Common.readFile(obj, function(result) {
            if(callback) callback(result);
        });
    });
}