/**
 * This view is an example list of people.
 */
Ext.define('TutorialApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    //id: 'mainlist',
    requires: [
        'TutorialApp.store.Personnel'
    ],

    title: 'Список товаров',
    store: {
        type: 'personnel'
    },
    
    columns: [
        { 
            text: 'ID',  
            dataIndex: 'id' 
        },
        { 
            text: 'Имя', 
            dataIndex: 'name', 
            flex: 1 
        },
        { 
            text: 'Описание', 
            dataIndex: 'description', 
            flex: 1 
        },
        { 
            text: 'Цена', 
            dataIndex: 'price'
        },
        { 
            text: 'Кол-во', 
            dataIndex: 'quality',
            renderer: function(value, metaData) {
                if (value === 0) {
                    metaData.style="background-color: red";
                }
                return value;
            }
        }
    ],
    
    listeners: {
        select: 'onItemSelected'
        //dblclick: 'onItemSelected'
       
    },
    renderTo: Ext.getBody(),
});
