/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//var lstTarima = [];
//var urlHandler = 'https://servidor.casc.com.mx/';

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('backbutton', this.onBackKeyDown, false);
                
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        // pictureSource=navigator.camera.PictureSourceType;
        // destinationType=navigator.camera.DestinationType; 
        app.receivedEvent('deviceready');
        //FastClick.attach(document.body);
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        try {
            this.initView();
            // oIndexCtrl = new IndexController();
            // oAppController = new AppController();

            // // Verifica la existencia de datos del usuario            
            // usrdata = localStorage.getItem('usrdata');
            // if(usrdata) {
            //     menuAct = 'inicio'
            // }
            // else {
            //     menuAct = 'config'
            // }
            // // oIndexCtrl.InitMenu();
        } catch (err) {
            console.log(err.message);
        }
    },
    initView: function() {
        $JSView.run('left');
    
        $JSView.declareMenu({
            menu: {
                url: '/menu',
                template: 'views/menuLeft.html',
                controller: 'menu'
            },
            viewA: {
                url: '/viewA',
                template: 'views/viewA.html',
                controller: 'viewA'
            },
            viewB: {
                url: '/viewB',
                template: 'views/viewB.html',
                controller: 'viewB'
            },
            viewC: {
                url: '/viewC',
                template: 'views/viewC.html',
                controller: 'viewC'
            }
        });
         
        /*Declare modal*/
        $JSView.declareModal({
            modalA: {
                url: '/modalA',
                template: 'views/modalA.html',
                controller: 'modalA'
            }
        });
         
        /*Asign view start*/
        $JSView.initView('viewA');
    },
    onBackKeyDown: function() {
        Common.notificationConfirm("Confirma que desea salir de la app", "Exit", ['Cancelar','Salir'], salir);
    }
};

function salir(btnIdx) {
    switch (btnIdx) {
        case 2:
            navigator.app.exitApp();    
            break;
    
        default:
            break;
    }
}