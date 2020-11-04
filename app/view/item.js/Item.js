Ext.define('TutorialApp.view.item.Item' , {
	extend: 'Ext.window.Window',
	xtype: 'item',

	requires: [
		'TutorialApp.view.item.ItemController',
		'Ext.form.Panel'
	],
	
	controller: 'item',
	bodyPadding: 10,
	title: 'Карточка товара',
	closable: false,
	autoShow: true,
	renderTo: Ext.getBody(),
	items: {
		xtype: 'form',
		refrence: 'itemform',
		
		items: [{
			margin: '10 0',
			xtype: 'displayfield',
			id: 'productID',
			name: 'id',
			fieldLabel: 'ID',
			allowBlank: false
		}, {
			margin: '10 0',
			xtype: 'displayfield',
			id: 'productDescription',
			name: 'description',
			fieldLabel: 'Наименование',
			allowBlank: false,
			
		}, {
			margin: '10 0',
			xtype: 'textfield',
			id: 'productPrice',
			name: 'price',
			fieldLabel: 'Цена',
			allowBlank: false,
			
		}, {
			margin: '10 0',
			xtype: 'textfield',
			id: 'productQuality',
			name: 'quality',
			fieldLabel: 'Кол-во',
			allowBlank: false,
		}],
		buttons: [{
			text: 'Сохранить',
			//disabled: 'true',
			listeners: {
				click: 'onSaveClicked'
			}
		}, {
			text: 'Отмена',
			listeners: {
				click: 'onAbortClicked',
			}
		}]
	}


})