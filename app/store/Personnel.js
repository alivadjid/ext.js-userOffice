Ext.define('TutorialApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [ 
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'price', type: 'float'},
        {name: 'quality', type: 'int'}
    ],

    data: { items: [
        { id: '0', 
        name: "Notebook Lenovo", 
        description: "Ноутбук IdeaPad S145-15IKB", 
        price: "250", 
        quality: "9" 
    },
        { 
          id: '1',     
          name: "Macbook Pro",  
          description: "Десктоп Apple 13.3", 
          price: "50", 
          quality: "7" 
        },
        { 
          id: '2',   
          name: "Aser Aspire",    
          description: "Траснформер A315-42-R4WX", 
          price: "300", 
          quality: "0" 
        },
        { 
          id: '3',     
          name: "Asus MX-35",        
          description: "Ноутбук ROG GL531GT", 
          price: "450", 
          quality: "1" 
        },
        {
          id: '4',
          name: 'Acer M345',
          description: "Ноутбук PRO Lite series",
          price: "320",
          quality: "0"
        }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
