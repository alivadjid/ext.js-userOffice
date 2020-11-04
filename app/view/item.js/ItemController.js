Ext.define('TutorialApp.view.item.ItemController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.item',

	init: function() {
	},

	onAbortClicked: function() {
		this.getView().destroy();
	},

	onSaveClicked:function(form, e){
		
		var fromWho = this.view.bind.data.lastValue.text;
		console.log(fromWho)
		console.log(typeof(fromWho))
		var id = Ext.getCmp('productID').getValue(id);
		//console.log(Ext.getCmp('item'))
		var price = +(Ext.getCmp('productPrice').getValue(price));
		var quality = +(Ext.getCmp('productQuality').getValue(quality));
		var q = (quality === parseInt(quality,10))
		if ( isNaN(price) || price < 0) {
			 	Ext.Msg.alert('Ошибка','Введена некорректная цена')
		} else if( isNaN(quality) || quality < 0 || !q) {
				 Ext.Msg.alert('Ошибка', 'Введено некорректное количество')
		} else {
			console.log('Good')
			var mainlist = Ext.getCmp(fromWho);
			store = 	mainlist.getStore();
			var prevPrice = store.getById(id).get('price');
			var prevQualit = store.getById(id).get('quality');

			if (prevPrice != price || prevQualit != quality) {
				store.getById(id).set('price', price);
				store.getById(id).set('quality', quality);
				Ext.Msg.alert('Сообщение','Внесены изменения')
			} else {
				Ext.Msg.alert('Все пучком','Изменений нет')
				
			}	
		}
		

	},

	priValCheck: function(form, e) {
		
	},

	quaValCheck: function(form, e) {
	}
})