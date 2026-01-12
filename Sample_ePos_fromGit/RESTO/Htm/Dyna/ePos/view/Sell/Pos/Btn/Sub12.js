Ext.define('ePos.view.Sell.Pos.Btn.Sub12', {
	extend: 'Ext.container.Container',
	alias: 'widget.sell.pos.btn.sub12',
	defaultListenerScope: true,
	config: {
		smsToolbar: 'Subs 12\"',
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
					text: 'Sandwiches 12 inches',
					textSize: '20px',
					itemId: 'LBL12INCHES'
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
					smsExec: 'FCT=710&UPC=6015',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006015.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6015BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6010',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006010.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6010BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6012',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006012.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6012BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6011',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006011.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6011BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6011',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006019.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6019BMP'
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
					text: 'Cheese & Steak 12\"',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6015',
					userCls: 'sms-btn-orange',
					backgroundImage: '',
					scale: 'large',
					textSize: '14px',
					textColor: '',
					flex: 1,
					itemId: 'ITM6015TXT'
				},
				{
					xtype: 'button',
					text: 'Chicken 12\"',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6010',
					userCls: 'sms-btn-orange',
					backgroundImage: '',
					scale: 'large',
					textSize: '14px',
					textColor: '',
					flex: 1,
					itemId: 'ITM6010TXT'
				},
				{
					xtype: 'button',
					text: 'Teriyaki 12\"',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6010',
					userCls: 'sms-btn-orange',
					backgroundImage: '',
					scale: 'large',
					textSize: '14px',
					textColor: '',
					flex: 1,
					itemId: 'ITM6012TXT'
				},
				{
					xtype: 'button',
					text: 'Ham 12\"',
					iconAlign: 'left',
					scale: 'large',
					flex: 1,
					itemId: 'ITM6011TXT',
					smsExec: 'FCT=710&UPC=6011',
					userCls: 'sms-btn-orange',
					textSize: '14px'
				},
				{
					xtype: 'button',
					text: 'Cold Cut 12\"',
					iconAlign: 'left',
					smsExec: 'FCT=710&UPC=6019',
					userCls: 'sms-btn-orange',
					scale: 'large',
					textSize: '14px',
					flex: 1,
					itemId: 'ITM6019TXT'
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
					smsExec: 'FCT=710&UPC=6015',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006015.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6017BMP'
				},
				{
					xtype: 'button',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6018',
					userCls: 'sms-btn-orange',
					backgroundImage: '/Bitmaps/0000000006018.jpg',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					scale: 'large',
					textSize: '14px',
					textColor: '#e9e9e9',
					flex: 1,
					itemId: 'ITM6018BMP'
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
					text: 'Roast Beef 12\"',
					iconAlign: 'left',
					scale: 'small',
					flex: 1,
					itemId: 'ITM6017TXT',
					smsExec: 'FCT=710&UPC=6017',
					userCls: 'sms-btn-orange',
					textSize: '14px'
				},
				{
					xtype: 'button',
					text: 'Tuna 12\"',
					iconCls: '',
					iconAlign: 'bottom',
					smsExec: 'FCT=710&UPC=6018',
					userCls: 'sms-btn-orange',
					backgroundImage: '',
					scale: 'large',
					textSize: '14px',
					textColor: '',
					flex: 1,
					itemId: 'ITM6018TXT'
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