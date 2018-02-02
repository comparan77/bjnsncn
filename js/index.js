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
        document.addEventListener("backbutton", onBackKeyDown, false);
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

            
    $JSView.run('left');
   
    $JSView.declareMenu({
        /*
        menu: {
            url: '/menu',
            template: 'views/menuLeft.html',
            controller: 'menu'
        },
        */
        menu: {
            url: '/menu',
            template: 'views/menuLeft.html',
            controller: 'menu'
        },
        
        viewMenuA: {
            url: '/viewMenuA',
            template: 'views/viewMenuA.html',
            controller: 'viewMenuA'
        },
        viewMenuAccount: {
            url: '/viewMenuAccount',
            template: 'views/viewMenuAccount.html',
            controller: 'viewMenuAccount'
        },
        viewMenuC: {
            url: '/viewMenuC',
            template: 'views/viewMenuC.html',
            controller: 'viewMenuC'
        },
        viewMenuD: {
            url: '/viewMenuD',
            template: 'views/viewMenuD.html',
            controller: 'viewMenuD'
        }
    });
    
    $JSView.declareView({ 
        viewGeneral: {
            url: '/viewGeneral',
            template: 'views/viewGeneral.html',
            controller: 'viewGeneral'
        },
        viewForms: {
            url: '/viewForms',
            template: 'views/viewForms.html',
            controller: 'viewForms'
        },
		viewFormsPlaceholder: {
            url: '/viewFormsPlaceholder',
            template: 'views/viewFormsPlaceholder.html',
            controller: 'viewFormsPlaceholder'
        },
        viewGrids: {
            url: '/viewGrids',
            template: 'views/viewGrids.html',
            controller: 'viewGrids'
        },
        viewSlide: {
            url: '/viewSlide',
            template: 'views/viewSlide.html',
            controller: 'viewSlide'
        },
        viewSlideHammer: {
            url: '/viewSlideHammer',
            template: 'views/viewSlideHammer.html',
            controller: 'viewSlideHammer'
        },
        viewSlideAdvertising: {
            url: '/viewSlideAdvertising',
            template: 'views/viewSlideAdvertising.html',
            controller: 'viewSlideAdvertising'
        },
        viewRoomChat: {
            url: '/viewRoomChat',
            template: 'views/viewRoomChat.html',
            controller: 'viewRoomChat'
        },
        viewTabs: {
            url: '/viewTabs',
            template: 'views/viewTabs.html',
            controller: 'viewTabs'
        },
        viewList: {
            url: '/viewList',
            template: 'views/viewList.html',
            controller: 'viewList'
        },
        viewListPhotos: {
            url: '/viewListPhotos',
            template: 'views/viewListPhotos.html',
            controller: 'viewListPhotos'
        },
        viewListVideos: {
            url: '/viewListVideos',
            template: 'views/viewListVideos.html',
            controller: 'viewListVideos'
        },
        viewTweets: {
            url: '/viewTweets',
            template: 'views/viewTweets.html',
            controller: 'viewTweets'
        },
        viewCards: {
            url: '/viewCards',
            template: 'views/viewCards.html',
            controller: 'viewCards'
        },
        viewOptions: {
            url: '/viewOptions',
            template: 'views/viewOptions.html',
            controller: 'viewOptions'
        },
        viewNotification: {
            url: '/viewNotification',
            template: 'views/viewNotification.html',
            controller: 'viewNotification'
        },
        viewCircle: {
            url: '/viewCircle',
            template: 'views/viewCircle.html',
            controller: 'viewCircle'
        },
        viewImagePopup: {
            url: '/viewImagePopup',
            template: 'views/viewImagePopup.html',
            controller: 'viewImagePopup'
        },
        viewListPhotosLoadMoreLocal: {
            url: '/viewListPhotosLoadMoreLocal',
            template: 'views/viewListPhotosLoadMoreLocal.html',
            controller: 'viewListPhotosLoadMoreLocal'
        },
        viewListPhotosLoadMoreRemote: {
            url: '/viewListPhotosLoadMoreRemote',
            template: 'views/viewListPhotosLoadMoreRemote.html',
            controller: 'viewListPhotosLoadMoreRemote'
        },
        viewListVideosLoadMoreRemote: {
            url: '/viewListVideosLoadMoreRemote',
            template: 'views/viewListVideosLoadMoreRemote.html',
            controller: 'viewListVideosLoadMoreRemote'
        },
        viewInterstitial:{
            url: '/viewInterstitial',
            template: 'views/viewInterstitial.html',
            controller: 'viewInterstitial'  
        }
    });
    
    $JSView.declareModal({
        modal: {
            url: '/modal',
            template: 'views/modal.html',
            controller: 'modal'
        }
    });
    
    $JSView.initView('viewMenuA');

        } catch (error) {
            alert(error.message);
        }
    }
};

function onBackKeyDown() {
    Common.notificationConfirm("Confirma que desea salir de la app", "Exit", ['Cancelar','Salir'], salir);
}

function salir(btnIdx) {
    switch (btnIdx) {
        case 2:
            navigator.app.exitApp();    
            break;
    
        default:
            break;
    }
}
