Ext.define('SenchaTouchApp.view.ProfileList',{
    extend: 'Ext.dataview.List',
    xtype:  'profilelist',
    id: 'profileList',
    config: {
        itemTpl: '{name}',
        store:  'Profile',
        listeners: {
            initialize: function (){
                this.getStore().load();
            }
        }
    }
});
