/**
 * Overrides the ExecCtrl
 */
Ext.define('SMS.overrides.controller.Exec', {
	override: 'SMS.controller.Exec',

	/**
	 * Overrides the original method ExecCtrl.entrySendUrl
	 * @param {*} obj 
	 * @param {*} url 
	 * @param {*} entry 
	 * @param {*} attachment 
	 * @param {*} options 
	 */
	entrySendUrl: function(obj,url,entry,attachment,options) {
		consoleLog('override of ExecCtrl.entrySendUrl');
		
		//Add custom code here...

		//Execute original method
		ExecCtrl.callParent(arguments);
	},

	

});