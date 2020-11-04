/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('TutorialApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //requires: ['TutorialApp.view.main.Main'],

    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var id = record.getData().id;
        var desc = record.getData().description;
        var price = record.getData().price;
        var qlt = record.getData().quality;
        //console.log(sender.view.grid.id);
        var p = sender.view.grid.id

       // var parent = sender.view.grid.id.match(/\d+/)
        //console.log(p)
        Ext.create({
            xtype: 'item',
            bind: {
                data: {
                    text: p
                }
            }
            
            
        });
        
        Ext.getCmp('productID').setValue(id);
        Ext.getCmp('productDescription').setValue(desc);
        Ext.getCmp('productPrice').setValue(price);
        
        Ext.getCmp('productQuality').setValue(qlt);

        //console.log('item')
        // var form = Ext.create({
        //     xtype: 'item',
        //     listeners: {
        //         change: function(field, newValue, oldValue){
        //             ed.set(field.getName(name), newValue)
                    

        //         }
        //     }
        // })
        // console.log(form.up('item'))

        //


        //console.log(item.getForm())
        //console.log(Ext.getCmp('itemform'))
        
        

        //console.log(Ext.getCmp('item'));
        //console.log(Ext.form.FieldSet('item'))//выпадающее меню
    },
    idFilter: function(form, e) {
            // var grid = form.up('window').down('mainlist');
            //var grid = Ext.getCmp('mainlist');
            var id1 = form.id.match(/\d+/);
            var id2 = +id1[0] + 2;
            var mainlist = Ext.getCmp('mainlist-' + id2);

            mainlist.getStore().addFilter({
                property: 'id',
                value: form.getValue()
            });
    },
    descriptionFilter: function(form, e) {
       
        //var id = form.id;

        var id1 = form.id.match(/\d+/);
        var id2 = +id1[0] + 1;
        //console.log (id2);
        //var mainlist = Ext.getCmp('mainlist');
        var mainlist = Ext.getCmp('mainlist-' + id2);
        //console.log(mainlist)
        //var mainlist;
        try {
            
            //console.log(form.getValue())
            mainlist.getStore().addFilter({
                property: 'description',
                value: form.getValue(),
                anyMatch: true,
                caseSensitive: false
            });
            
        //    var filters = mainlist.getStore().getFilters()
           
        //    function filName (description) {
        //        return description.length > 5;
        //    }
        //    filters.add(filName);

            // mainlist.getStore().filterBy(function(record, id) {
            //     if(record.get('description') === form.getValue()) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // })
            
            // var searchString = form.getValue();
            // store = mainlist.getStore();
            // filters = [];
            
            // if(searchString) {

            // }
            
        } catch(er) {
            console.log(er)
        }
       
    },
    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            console.log('yeee')
        }
    },

    onClickButton: function() {

        localStorage.removeItem('TutorialLoggedIn');

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    },
    
    onProductsButton: function(ev) {
        //console.log(this);
        var addIndex = ev.up().up().items.length;
        //console.log(addIndex)
       //var tab = ev.up().up().add({
        var tab = ev.up().up().insert(addIndex, {
            title: 'Товары',
                    items: [{
                        xtype: 'textfield', // фильтр по id
                        fieldLabel: 'ID',
                        margin: 10,
                        name: 'searchstring',
                        emptyText: 'Введите фильтр...',
                        enableKeyEvents: true,
                        //
                        listeners: {
                            // keypress: function(me,e){

                            //     if(e.getKey() == '13') {
                            //         console.log('idF')
                            //         return 'idFilter'
                            //     }
                            // }
                            keypress: 'idFilter'
                        }
                        

                        
                    }, {
                        xtype: 'textfield', // фильтр по описанию
                        fieldLabel: 'Описание',
                        margin: 10,
                        name: 'searchstring',
                        emptyText: 'Введите фильтр...',
                        enableKeyEvents: true,
                        listeners: { 
                            //keyup: 'descriptionFilter'
                            keypress: 'descriptionFilter'
                        }
                    }, {
                        xtype: 'mainlist'
                    }]
                    //html: 'Содержимое'
                    //xtype: 'productItems'
                });
                //Ext.tab.Panel.setActiveTab(tab)
                ev.up().up().setActiveTab(addIndex);
        },
    
    //renderTo: Ext.getBody()
});
