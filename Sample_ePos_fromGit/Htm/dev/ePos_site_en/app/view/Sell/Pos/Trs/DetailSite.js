/**
 * Ovverrides the current Sell.Pos.Trs.Detail view 
 * to add or redefine properties from the base
 * (override by alias, cannot be used with dynamic views)
 */
Ext.define('SMS.view.Sell.Pos.Trs.DetailSite', {
	extend: 'SMS.view.Sell.Pos.Trs.Detail',
  alias: 'widget.sell.pos.trs.detail',

  //Load and keep the base view
  initComponent: function () {
    this.callParent();

    //Add a css class on the panel 
    var pnl = this.down('panel');
    if (pnl) pnl.addBodyCls('site-epos-trs-detail-pnl');
  }
});