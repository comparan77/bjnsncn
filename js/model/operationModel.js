function OperationModel() {}

OperationModel.loadMenu = function(callback, error) {
    var url = 'https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=12Q2qyGsTo1hMCHZfeDblv9LX2-JuwIjZdRpbAApCw84&sheet=hoja';
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

OperationModel.carga_ordenes_trabajo = function(callback, error) {
    var url = urlHandler + 'handlers/CAEApp.ashx?op=orden_trabajo&opt=getOrdenes';
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

OperationModel.maquila_addLst = function(obj, callback, error) {
    var url = urlHandler + 'handlers/CAEApp.ashx?op=maquila&opt=addLst';
    try {
        Common.fetchJSONFile(
            url, 
            function(data) {
                callback(data);
            }, 
            function(msg) {
                error(msg);
            },
            'POST',
            JSON.stringify(obj)
        );
    } catch (error) {
        console.log(error.message);
    }
}