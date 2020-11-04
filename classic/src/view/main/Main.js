/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
//TutorialApp.view.main.Main
// var tabs = Ext.create('Ext.tab.panel', {
//     xtype: 'app-main'
// })




Ext.define('TutorialApp.view.main.Main', {  
    //name: 'tab',
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    alias: 'Main',
    
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'TutorialApp.view.main.MainController',
        'TutorialApp.view.main.MainModel',
        'TutorialApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',
    
    //tabBarHeaderPosition: 1,
    headerPosition: 'top',
    titleRotation: 0,
    tabRotation: 0,
    // fullscreen: true,
    header: {
        
        layout: {
            //
            //type: 'hbox',
            align: 'stretch'
        },
        title: {
            bind: {
                text: 'Учет товаров'
                // text: '{name}'
            },
            flex: 0
        },
        //iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Товары',
            margin: '10 10',
            
            listeners: {
                click: 'onProductsButton', 
            },
        }, {
            xtype: 'button',
            text: 'Выйти',
            margin: '10 0',
            handler: 'onClickButton'
        }]
    },
   
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        // styleHtmlContent: true,
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
  

});
