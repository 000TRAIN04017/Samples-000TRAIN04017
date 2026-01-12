Ext.define('ePos.view.Sell.Pos.Btn.Start', {
	extend: 'Ext.container.Container',
	alias: 'widget.sell.pos.btn.start',
	defaultListenerScope: true,
	config: {
		smsToolbar: 'Main',
		smsHost: 'trsbtn',
		smsEditable: true,
		smsHostRefresh: true,
		smsEditor: {
			position: 'panel'
		}
	},
	cls: 'sms-pos-btn-start',
	layout: {
		type: 'vbox',
		align: 'stretch',
		pack: 'start'
	},
	items: [
		{
			xtype: 'container',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch',
				pack: 'start'
			},
			items: [
				{
					xtype: 'container',
					flex: 5,
					layout: {
						type: 'hbox',
						align: 'stretch',
						pack: 'start'
					},
					items: [
						{
							xtype: 'button',
							smsExec: 'jsWin=sell.pos.menu.func:panel',
							smsHelp: 'usersV4:Home/Help.htm',
							cls: 'sms-btn-start-fct',
							flex: 1,
							height: 92,
							itemId: 'FCT',
							width: 177,
							iconAlign: 'top',
							iconCls: 'x-fa fa-cogs fa-2x',
							text: 'Functions',
							scale: 'small',
							userCls: 'sms-btn-lightpurple'
						},
						{
							xtype: 'button',
							smsExec: 'jsView=Sell.Pos.Btn.Manager:panel',
							smsHelp: 'usersV4:Home/Help.htm',
							cls: 'sms-btn-start-fct',
							flex: 1,
							height: 92,
							itemId: 'manager',
							width: 177,
							iconAlign: 'top',
							iconCls: 'x-fa fa-user fa-2x',
							text: 'Manager',
							scale: 'small',
							userCls: 'sms-btn-lightpurple'
						},
						{
							xtype: 'button',
							smsExec: 'jsFct=BalCtrl.balancingScreenLoad',
							smsHelp: 'usersV4:Home/Help.htm',
							cls: 'sms-btn-start-fct',
							flex: 1,
							height: 92,
							itemId: 'balancing',
							width: 177,
							iconAlign: 'top',
							iconCls: 'x-fa fa-balance-scale fa-2x',
							text: 'Balancing',
							scale: 'small',
							userCls: 'sms-btn-lightpurple'
						},
						{
							xtype: 'helpbtn',
							cls: 'sms-btn-start-fct',
							flex: 1,
							height: 92,
							itemId: 'help',
							width: 177,
							enableToggle: true,
							iconAlign: 'top',
							iconCls: 'x-fa fa-question-circle fa-2x',
							text: 'Help',
							scale: 'small',
							userCls: 'sms-btn-darkblue'
						}
					],
					smsAlias: 'container_0'
				}
			],
			smsAlias: 'container_0'
		},
		{
			xtype: 'container',
			flex: 0.5,
			smsAlias: 'container_1',
			items: []
		},
		{
			xtype: 'container',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch',
				pack: 'start'
			},
			items: [
				{
					xtype: 'button',
					smsExec: 'FCT=307',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 2,
					itemId: 'FCT307',
					text: 'Customer',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'jsWin=sell.pos.btn.discounts:panel',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 2,
					itemId: 'discounts',
					iconCls: '',
					text: 'Discounts',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=370',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT370',
					text: 'Restore',
					iconAlign: 'left',
					scale: 'small'
				}
			],
			smsAlias: 'container_2'
		},
		{
			xtype: 'container',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch',
				pack: 'start'
			},
			items: [
				{
					xtype: 'button',
					smsExec: 'jsFct=CustomersCtrl.loadList',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 2,
					itemId: 'customers',
					text: 'Search customer',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=310',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 2,
					itemId: 'FCT310',
					text: 'Payment',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=375',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT375',
					iconAlign: 'top',
					iconCls: 'x-fa fa-server fa-2x',
					text: 'Backup',
					scale: 'small'
				}
			],
			smsAlias: 'container_3'
		},
		{
			xtype: 'container',
			flex: 1,
			margin: '10 0 0 0',
			layout: {
				type: 'hbox',
				align: 'stretch',
				pack: 'start'
			},
			items: [
				{
					xtype: 'button',
					smsExec: 'FCT=45',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 2,
					itemId: 'FCT45',
					userCls: 'sms-btn-lightblue',
					text: 'Weight',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=716&ITM=10',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT716ITM10',
					userCls: 'sms-btn-lightblue',
					text: 'Grocery',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=716&ITM=110',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT716ITM110',
					userCls: 'sms-btn-lightblue',
					text: 'Produce',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'jsFct=PosCtrl.deptListLoad',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'departments',
					userCls: 'sms-btn-lightblue',
					text: 'Dept.',
					iconAlign: 'left',
					scale: 'small'
				}
			],
			smsAlias: 'container_4'
		},
		{
			xtype: 'container',
			flex: 1,
			margin: '0 0 10 0',
			layout: {
				type: 'hbox',
				align: 'stretch',
				pack: 'start'
			},
			items: [
				{
					xtype: 'button',
					smsExec: 'FCT=40',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 2,
					itemId: 'FCT40',
					userCls: 'sms-btn-lightblue',
					text: 'Unit qty',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=716&ITM=320',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT716ITM320',
					userCls: 'sms-btn-lightblue',
					text: 'Lottery',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=716&ITM=130',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT716ITM130',
					userCls: 'sms-btn-lightblue',
					text: 'Deli',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'jsFct=PosCtrl.subDeptListLoad',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'subDepartments',
					userCls: 'sms-btn-lightblue',
					text: 'Sub-dept.',
					iconAlign: 'left',
					scale: 'small'
				}
			],
			smsAlias: 'container_5'
		},
		{
			xtype: 'container',
			flex: 2,
			layout: {
				type: 'hbox',
				align: 'stretch',
				pack: 'start'
			},
			items: [
				{
					xtype: 'button',
					smsExec: 'FCT=710',
					flex: 1.65,
					itemId: 'FCT710',
					iconAlign: 'top',
					iconCls: 'fa fa-barcode fa-2x',
					text: 'PLU',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'jsFct=FlipCtrl.loadFlipChartFullScreen',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1.65,
					itemId: 'flipChart',
					iconAlign: 'top',
					iconCls: 'x-fa fa-cubes fa-2x',
					text: 'FLIP',
					scale: 'small'
				},
				{
					xtype: 'container',
					flex: 5,
					layout: {
						type: 'vbox',
						align: 'stretch',
						pack: 'start'
					},
					items: [
						{
							xtype: 'container',
							flex: 1,
							layout: {
								type: 'hbox',
								align: 'stretch',
								pack: 'start'
							},
							items: [
								{
									xtype: 'button',
									smsExec: 'FCT=747',
									smsHelp: 'usersV4:Home/Help.htm',
									flex: 1,
									itemId: 'FCT747',
									text: 'WIC shift',
									iconAlign: 'left',
									scale: 'small'
								},
								{
									xtype: 'button',
									smsExec: 'FCT=742',
									smsHelp: 'usersV4:Home/Help.htm',
									flex: 1,
									itemId: 'FCT742',
									text: 'Scale shift',
									iconAlign: 'left',
									scale: 'small'
								},
								{
									xtype: 'button',
									smsExec: 'FCT=740',
									smsHelp: 'usersV4:Home/Help.htm',
									flex: 1,
									itemId: 'FCT740',
									text: 'Tax shift',
									iconAlign: 'left',
									scale: 'small'
								}
							],
							smsAlias: 'container_0'
						},
						{
							xtype: 'container',
							flex: 1,
							layout: {
								type: 'hbox',
								align: 'stretch',
								pack: 'start'
							},
							items: [
								{
									xtype: 'button',
									smsExec: 'FCT=746',
									smsHelp: 'usersV4:Home/Help.htm',
									flex: 1,
									itemId: 'FCT746',
									text: 'FS shift',
									iconAlign: 'left',
									scale: 'small'
								},
								{
									xtype: 'button',
									smsExec: 'FCT=732',
									smsHelp: 'usersV4:Home/Help.htm',
									flex: 1,
									itemId: 'FCT732',
									text: 'Receipt on/off',
									iconAlign: 'left',
									scale: 'small'
								},
								{
									xtype: 'button',
									smsExec: 'FCT=730',
									smsHelp: 'usersV4:Home/Help.htm',
									flex: 1,
									itemId: 'FCT730',
									text: 'Receipt copy',
									iconAlign: 'top',
									scale: 'small',
									iconCls: 'x-fa fa-print fa-3x'
								}
							],
							smsAlias: 'container_1'
						}
					],
					smsAlias: 'container_2'
				}
			],
			smsAlias: 'container_6'
		},
		{
			xtype: 'container',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch',
				pack: 'start'
			},
			items: [
				{
					xtype: 'button',
					smsExec: 'FCT=725',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT725',
					text: 'Price info',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=680',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT680',
					text: 'Drawer',
					iconAlign: 'left',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=101',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 1,
					itemId: 'FCT101',
					userCls: 'sms-btn-lightgree',
					iconAlign: 'top',
					iconCls: 'x-fa fa-money fa-2x',
					text: 'Cash',
					scale: 'small'
				},
				{
					xtype: 'button',
					smsExec: 'FCT=720',
					smsHelp: 'usersV4:Home/Help.htm',
					flex: 2,
					itemId: 'FCT720',
					userCls: 'sms-btn-green',
					text: 'SUB-TOTAL',
					iconAlign: 'left',
					scale: 'small'
				}
			],
			smsAlias: 'container_7'
		}
	]
});