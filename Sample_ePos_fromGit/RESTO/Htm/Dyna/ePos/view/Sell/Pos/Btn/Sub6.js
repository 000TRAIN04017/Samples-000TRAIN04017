Ext.define('ePos.view.Sell.Pos.Btn.Sub6', {
	extend: 'Ext.container.Container',
	alias: 'widget.sell.pos.btn.sub6',
	defaultListenerScope: true,
	config: {
		smsToolbar: 'Subs 6\"',
		smsHost: 'trsbtn',
		smsEditable: true,
		smsEditor: {
			position: 'panel',
			type: 'dynamic'
		}
	},
	padding: '0 0 0 0',
	layout: {
		type: 'vbox',
		align: 'stretch',
		pack: 'start'
	},
	items: [
		{
			xtype: 'container',
			layout: {
				type: 'hbox',
				pack: 'center',
				align: 'stretch'
			},
			userCls: '',
			margin: '10',
			items: [
				{
					xtype: 'label',
					text: 'Sandwiches 6 inches',
					textSize: '20px',
					itemId: 'LBL6INCHES'
				}
			],
			smsAlias: 'container_0'
		},
		{
			xtype: 'container',
			flex: 1,
			margin: '0 null null null',
			items: [
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6005',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006005.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6005BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6000',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006000.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6000BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6002',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006002.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6002BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6001',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006001.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6001BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6001',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006009.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6009BMP'
				}
			],
			smsAlias: 'container_1',
			layout: {
				type: 'hbox',
				pack: 'start',
				align: 'stretch'
			}
		},
		{
			xtype: 'container',
			layout: {
				type: 'hbox',
				pack: 'start',
				align: 'stretch'
			},
			margin: '0 null null null',
			items: [
				{
					xtype: 'button',
					text: 'Cheese & Steak 6\"',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6015',
					userCls: 'sms-btn-orange',
					backgroundImage: '',
					scale: 'large',
					textSize: '14px',
					textColor: '',
					flex: 1,
					itemId: 'ITM6005TXT'
				},
				{
					xtype: 'button',
					text: 'Chicken 6\"',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6000',
					userCls: 'sms-btn-orange',
					backgroundImage: '',
					scale: 'large',
					textSize: '14px',
					textColor: '',
					flex: 1,
					itemId: 'ITM6000TXT'
				},
				{
					xtype: 'button',
					text: 'Teriyaki 6\"',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6000',
					userCls: 'sms-btn-orange',
					backgroundImage: '',
					scale: 'large',
					textSize: '14px',
					textColor: '',
					flex: 1,
					itemId: 'ITM6002TXT'
				},
				{
					xtype: 'button',
					text: 'Ham 6\"',
					iconAlign: 'left',
					scale: 'large',
					flex: 1,
					itemId: 'ITM6001TXT',
					smsExec: 'FCT=710&ITM=6001',
					userCls: 'sms-btn-orange',
					textSize: '14px'
				},
				{
					xtype: 'button',
					text: 'Cold Cut 6\"',
					iconAlign: 'left',
					smsExec: 'FCT=710&ITM=6009',
					userCls: 'sms-btn-orange',
					scale: 'large',
					textSize: '14px',
					flex: 1,
					itemId: 'ITM6009TXT'
				}
			],
			smsAlias: 'container_2'
		},
		{
			xtype: 'container',
			flex: 1,
			margin: '0 null null null',
			items: [
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6005',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006005.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6007BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6008',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006008.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6008BMP'
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'start',
						align: 'begin'
					},
					flex: 1,
					margin: '0px 0px 0px 0px',
					items: [],
					smsAlias: 'container_2'
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'start',
						align: 'begin'
					},
					flex: 1,
					margin: '0px 0px 0px 0px',
					items: [],
					smsAlias: 'container_3'
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'start',
						align: 'begin'
					},
					flex: 1,
					margin: '0px 0px 0px 0px',
					items: [],
					smsAlias: 'container_4'
				}
			],
			smsAlias: 'container_3',
			layout: {
				type: 'hbox',
				pack: 'start',
				align: 'stretch'
			}
		},
		{
			xtype: 'container',
			layout: {
				type: 'hbox',
				pack: 'start',
				align: 'stretch'
			},
			margin: '0 null null null',
			items: [
				{
					xtype: 'button',
					text: 'Roast Beef 6\"',
					iconAlign: 'left',
					scale: 'small',
					flex: 1,
					itemId: 'ITM6007TXT',
					smsExec: 'FCT=710&ITM=6007',
					userCls: 'sms-btn-orange',
					textSize: '14px'
				},
				{
					xtype: 'button',
					text: 'Tuna 6\"',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&ITM=6008',
					userCls: 'sms-btn-orange',
					backgroundImage: '',
					scale: 'large',
					textSize: '14px',
					textColor: '',
					flex: 1,
					itemId: 'ITM6008TXT'
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'start',
						align: 'begin'
					},
					flex: 1,
					margin: '0px 0px 0px 0px',
					items: [],
					smsAlias: 'container_2'
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'start',
						align: 'begin'
					},
					flex: 1,
					margin: '0px 0px 0px 0px',
					items: [],
					smsAlias: 'container_3'
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'start',
						align: 'begin'
					},
					flex: 1,
					margin: '0px 0px 0px 0px',
					items: [],
					smsAlias: 'container_4'
				}
			],
			smsAlias: 'container_4'
		},
		{
			xtype: 'container',
			layout: {
				type: 'vbox',
				pack: 'start',
				align: 'begin'
			},
			flex: 4,
			margin: '10',
			items: [],
			smsAlias: 'container_5'
		}
	]
});