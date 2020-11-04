Ext.define('TutorialApp.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	onLoginClick: function(me) {
		
		var form = me.up('window').down('form').getForm().getValues();
		
		if (form.username === 'admin') {
			if (form.password === 'padmin') {
				localStorage.setItem("TutorialLoggedIn", false);

				this.getView().destroy();
				
				Ext.create({
					
					xtype: 'app-main'
				})
	
			} else {
				Ext.Msg.alert('Ошибка', 'Введена неправильная пара логин/пароль!')
			}
		} else {
			Ext.Msg.alert('Ошибка', 'Введена неправильная пара логин/пароль!')
		}
		
	}
})