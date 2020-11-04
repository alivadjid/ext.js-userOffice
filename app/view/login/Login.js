Ext.define('TutorialApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: [
		'TutorialApp.view.login.LoginController', //include LofinController.js
		'Ext.form.Panel' //include Ext.form.Panel
	],

	controller: 'login',//ViewController. LoginWindow
	bodyPadding: 10, //10px Padding
	title: 'Окно входа', //Title
	closable: false, //can be closed window or no
	autoShow: true, //will show Window once it'c created

	items: { //contain
	xtype: 'form', //easily create Component
	reference: 'form',
	items: [{ //level deeper
		xtype: 'textfield',
		// id: 'username',
		name: 'username',
		fieldLabel: 'Пользователь',
		allowBlank: false
	}, {
		xtype: 'textfield',
		name: 'password',
		inputType: 'password',
		fieldLabel: 'Пароль',
		allowBlank: false
	}, {
		xtype: 'displayfield',
		hideEmptyLabel: false,
		value: 'Введите Ваш пароль'
	}],
	buttons: [{
		text: 'Войти',
		formBind: true,
		listeners: {
			click:  'onLoginClick',
				
			
		}
		
	}]
	}
});