Ext.define('ePos.view.Sell.Pos.Btn.Food', {
	extend: 'Ext.container.Container',
	alias: 'widget.sell.pos.btn.food',
	defaultListenerScope: true,
	config: {
		smsToolbar: 'Food',
		smsHost: 'trsbtn',
		smsEditable: true,
		smsEditor: {
			position: 'panel',
			type: 'dynamic'
		}
	},
	padding: '10 5 5 5',
	layout: {
		type: 'vbox',
		align: 'stretch',
		pack: 'start'
	},
	items: [
		{
			xtype: 'container',
			layout: {
				type: 'vbox',
				pack: 'center',
				align: 'center'
			},
			flex: 1,
			margin: '0px 0px 0px 0px',
			items: [],
			smsAlias: 'container_0'
		},
		{
			xtype: 'container',
			layout: {
				type: 'hbox',
				pack: 'center',
				align: 'stretch'
			},
			flex: 1,
			margin: '0px 0px 0px 0px',
			items: [
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
					smsAlias: 'container_0'
				},
				{
					xtype: 'button',
					text: '6\" Subs',
					iconAlign: 'left',
					smsExec: 'jsView=Sell.Pos.Btn.Sub6:panel',
					scale: 'large',
					flex: 1,
					itemId: 'BTN6SUBS_01a4fdeff9948',
					userCls: 'sms-btn-orange'
				},
				{
					xtype: 'button',
					text: '12\" Subs',
					iconAlign: 'left',
					smsExec: 'jsView=Sell.Pos.Btn.Sub12:panel',
					scale: 'large',
					flex: 1,
					itemId: 'BTN12SUBS_02ee1e754d571',
					userCls: 'sms-btn-orange'
				},
				{
					xtype: 'button',
					text: 'Drinks',
					iconAlign: 'left',
					smsExec: 'cgi=ePos_sell_pos_flipchart_btn.xml&F17=50003',
					scale: 'large',
					flex: 1,
					itemId: 'CAT50003_05f97774156d8',
					userCls: 'sms-btn-darkblue'
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
			smsAlias: 'container_1'
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
				type: 'hbox',
				pack: 'center',
				align: 'stretch'
			},
			flex: 1,
			margin: '0px 0px 0px 0px',
			items: [
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
					smsAlias: 'container_0'
				},
				{
					xtype: 'button',
					text: 'Chips',
					iconAlign: 'left',
					scale: 'large',
					flex: 1,
					itemId: 'FLIP_F17_50004',
					smsExec: 'cgi=ePos_sell_pos_flipchart_btn.xml&F17=500004',
					userCls: 'sms-btn-green'
				},
				{
					xtype: 'button',
					text: 'Cookies',
					iconAlign: 'left',
					scale: 'large',
					flex: 1,
					itemId: 'BTN12SUBS',
					smsExec: 'cgi=ePos_sell_pos_flipchart_btn.xml&F17=500005',
					userCls: 'sms-btn-lightpurple'
				},
				{
					xtype: 'button',
					text: 'Others',
					iconAlign: 'left',
					scale: 'large',
					flex: 1,
					itemId: 'CAT50003',
					smsExec: 'cgi=ePos_sell_pos_flipchart_btn.xml&F17=500006',
					userCls: 'sms-btn-red'
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'start',
						align: 'begin'
					},
					flex: 1,
					margin: 'null null null null',
					items: [],
					smsAlias: 'container_4'
				}
			],
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
			smsAlias: 'container_5'
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
			smsAlias: 'container_6'
		}
	]
});