console.info('DemoCtrl.load.start');

var DemoCtrl;

/**
 * @class SMS.controller.Site.Demo
 * DemoCtrl Demo Controller 
 * demonstrating how to create a new site controller using hooks 
 * called from an XML script on the server side
 */
Ext.define('SMS.controller.Site.Demo', {
	extend: 'Ext.app.Controller',


	/**
	 * initiates the DemoCtrl controller 
	 */
	init: function() {
		consoleLog('DemoCtrl.init');
		DemoCtrl = this;

		this.application.on({
			appSiteDemoPopupHook: this.siteDemoPopupHook
		});
	},

	/**
	 * Called from hooks in the script cgi\ePos_sell_site_demo_popup.xml
	 * @param {*} node xml record
	 * @param {*} cmp previous component or item in the callstack
	 */
	siteDemoPopupHook: function(node, cmp) {
		//Display the pop-up window from Sample_ePos_demo/Htm/dev/ePos_site/app/view/Sell/Site/Demo
		var win=ExecCtrl.windowAdd('sell.site.demo', 'modal', null, cmp);
		win.center();

		//Join the data read in the xml response
		var vm = win.getViewModel();
		if (vm) {
			var store = vm.getStore('siteDemoNumberEntry');
			if (store) {
				store.loadRawData(node);				
			} 
		}
	},

	/**
	 * Calling the function 760 Number Entry from a button in the UI
	 * @param {*} cmp component calling the Number Entry function
	 */
	numberEntryFct: function(cmp) {
		//Get the data from the form
		var win = cmp.up('window');
		var txtField = win.down('#numberEntryTxtFld');
		var vm = win.getViewModel();
		var store = vm.getStore('siteDemoNumberEntry');
		var F253='';

		//Add the timestamp if available from the data store
		if (store && 
			store.data && 
			store.data.items[0] && 
			store.data.items[0].data && 
			store.data.items[0].data.F253) {
			F253 = F253 + store.data.items[0].data.F253 + ': ' ;
		}

		//Execute the function 760 Number entry with the text entry
		ExecCtrl.entrySendUrl(cmp,'FCT=760&ENTRY=' + F253 + txtField.getValue());
		ExecCtrl.windowClose();
	}
});
console.info('DemoCtrl.load.end');