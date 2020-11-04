/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */

 
Ext.application({ //инициализирует приложение MVC
    
    name: 'TutorialApp', //им приложения

    extend: 'TutorialApp.Application',

    requires: [
        'TutorialApp.view.main.Main'
    ],
    



    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //Убираем загрузку страницы
    //mainView: 'TutorialApp.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to TutorialApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
//-------------



/*
Ext.define('Example.Class', {
    extends: 'Ext.tab.Panel',
    items: [
        {
            title: 'Tab 1',
            html : 'A simple tab'
        },
        {
            title: 'Tab 2',
            html : 'Another one'
        }
    ],
    renderTo : Ext.getBody()
});

var tabs = Ext.create('Example.Class');

Ext.create('Ext.button.Button', {
    text    : 'New tab',
    scope   : this,
    handler : function() {
        var tab = tabs.add({
            // we use the tabs.items property to get the length of current items/tabs
            title: 'Tab ' + (tabs.items.length + 1),
            html : 'Another one'
        });

        tabs.setActiveTab(tab);
    },
    renderTo : Ext.getBody()
});
*/
/*
Ext.application({
    name: 'Fiddle',
  
    launch: function() {
      Ext.define('Core.toolbar.view.ToolbarView', {
        extend: 'Ext.toolbar.Toolbar',
  
        dock: 'top',
        items: [{
          xtype: 'button',
          text: 'add'
        }, {
          xtype: 'button',
          text: 'remove'
        }]
  
      });
  
      Ext.define('MyApp.view.ToolbarView', {
        extend: 'Core.toolbar.view.ToolbarView',
        initComponent: function() {
  
          this.callParent();
          this.add({
            xtype: 'button',
            text: 'ADDING AN OTHER BUTTON'
          });
        }
  
      });
  
      Ext.create('MyApp.view.ToolbarView', {
        renderTo: Ext.getBody()
      });
    }
  });
  */