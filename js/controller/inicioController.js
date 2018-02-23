var Inicio = function() {
    this.Init = init;
    var arrMenu = [];
    var arrDesayuno = [];
    var arrComida = [];
    var arrPostre = [];
    var sig_1;
    var ant_1;
    var confirm;

    function initControles () {
        try {

            getLimitePedido();

            sig_1 = document.getElementById('sig_1');
            ant_1 = document.getElementById('ant_1');
            confirm = document.getElementById('confirm'); 

            sig_1_click();
            ant_1_click();
            confirm_click();

            grd_desayuno = new DataGrid({
                Id: 'grd_desayuno',
                source: arrDesayuno
            });
            grd_desayuno.open();
            grd_desayuno.dataBind();

            grd_comida = new DataGrid({
                Id: 'grd_comida',
                source: arrComida
            });
            grd_comida.open();
            grd_comida.dataBind();

            grd_postre = new DataGrid({
                Id: 'grd_postre',
                source: arrPostre
            });
            grd_postre.open();
            grd_postre.dataBind();
            
            
        } catch (error) {
            console.log(error.message);
        }
    }

    function init() {
        document.getElementById('spn_week_number').innerHTML = String(Common.getWeekNumber(new Date())).split(',')[1];
        loadMenu();
    }

    function loadMenu() {
        OperationModel.loadMenu(function(data){
            //console.log(JSON.stringify(data.hoja));
            var oBeanPlatillo;
            for(var item in data.hoja) {
                var obj = data.hoja[item];
                oBeanPlatillo = new BeanPlatillo(
                    obj.Categoria,
                    obj.Platillo,
                    Common.getCurrencyFormat(obj.Precio, 2)
                );
                arrMenu.push(oBeanPlatillo);
            }

            arrDesayuno = arrMenu.filter(function(obj) {
                return obj.Categoria == 'Desayuno';
            });

            arrComida = arrMenu.filter(function(obj) {
                return obj.Categoria == 'Comida';
            });

            arrPostre = arrMenu.filter(function(obj) {
                return obj.Categoria == 'Postre';
            });

            initControles();
        }, function(err) {
            console.log(err.message);
        });
    }

    function getLimitePedido() {
        var d = new Date();
        var n = d.getDay()
        var s = 6 - n;
        var date = new Date();
    
        date.setDate(date.getDate()+s);
        
        //document.getElementById("demo").innerHTML = date;
        calcula('spn_tiempo_limite', date);
    }
    
    function calcula(id, fechaLim){
        var fecha=new Date(fechaLim.getFullYear(),fechaLim.getMonth(),fechaLim.getDate(),'12','00','00')
        var hoy=new Date()
        var dias=0
        var horas=0
        var minutos=0
        var segundos=0
     
        if (fecha>hoy){
            var diferencia=(fecha.getTime()-hoy.getTime())/1000;
            dias=Math.floor(diferencia/86400);
            diferencia=diferencia-(86400*dias);
            horas=Math.floor(diferencia/3600);
            diferencia=diferencia-(3600*horas);
            minutos=Math.floor(diferencia/60);
            diferencia=diferencia-(60*minutos);
            segundos=Math.floor(diferencia);
     
            horas = addCero(horas);
            minutos = addCero(minutos);
            segundos = addCero(segundos);

            document.getElementById(id).innerHTML=dias + 'd ' + horas + ':' + minutos + ':' + segundos;
     
            if (dias>0 || horas>0 || minutos>0 || segundos>0){
                setTimeout(function() {
                    calcula(id, fechaLim);
                }, 1000)
            }
        }
        else{
            document.getElementById('restante').innerHTML='Quedan ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos';
        }
    }

    function addCero(valor) {
        if (valor < 10)
            valor = '0' + String(valor);
        return valor;            
    }

    function sig_1_click() {
        sig_1.addEventListener('click', function() {            
            if(Inicio.subtotal >= MinPedido) {
                x$('#step_1').addClass('hidden');
                x$('#step_2').removeClass('hidden');
                fillPedidos();
            } else {
                Common.notificationAlert('Se requiere un pedido mínimo de ' + Common.getCurrencyFormat(MinPedido, 2), 'Info', 'Ok');
            }
        });
    }

    function ant_1_click() {
        ant_1.addEventListener('click', function() {
            x$('#step_2').addClass('hidden');
            x$('#step_1').removeClass('hidden');
        });
    }

    function fillPedidos() {

        var arrCategorias = ['Desayuno', 'Comida', 'Postre'];

        var grd;
        for(var item in arrCategorias) {
            var obj = arrCategorias[item];
            var arrCat = Inicio.arrPedido.filter(function(o) {
                return o.Cantidad > 0 && o.Categoria == obj + 's';
            });
            grd = new DataGrid({
                Id: 'grd_' + obj + '_pedido',
                source: arrCat
            });
            grd.open();
            grd.dataBind();
        }
    }

    function confirm_click() {
        confirm.addEventListener('click', function() {
            Common.notificationAlert('¡Gracias por tu preferencia!', 'La orden ha sido tomada', 'Ok');
        });
    }
}

Inicio.arrPedido = [];
Inicio.subtotal = 0;

Inicio.checkTotal = function(source) {
    try {
        var arrPedido = Inicio.arrPedido;
        var platilloTd = source.parentNode.parentNode.children[0].innerHTML;
        var precio = Common.getOnlyDecimal(source.parentNode.parentNode.children[1].innerHTML);
        var cantidad = source.value;
        var categoria = source.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0].innerHTML;

        if(cantidad.length == 0) {
            source.value = '0';
            cantidad = 0;
        }

        var finded = [];
        finded = arrPedido.filter(function(obj) {
            if(obj.Platillo == platilloTd)
                obj.Cantidad = source.value;
            return obj.Platillo == platilloTd;
        });

        if(finded== undefined || finded.length == 0) {
            arrPedido.push(new BeanPedido(
                categoria,
                platilloTd,
                precio,
                cantidad
            ))
        } 
        
        Inicio.subtotal = 0;

        for(var item in arrPedido) {
            obj = arrPedido[item];
            Inicio.subtotal += (obj.Precio * obj.Cantidad);
        }

        var total = 0;
        total += Inicio.subtotal;

        document.getElementById('spn_subtotal').innerHTML = Common.getCurrencyFormat(Inicio.subtotal, 2);
        document.getElementById('spn_total').innerHTML = Common.getCurrencyFormat(total, 2);
        
    } catch (error) {
        console.log(error.message);
    }
}