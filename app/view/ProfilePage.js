Ext.define('SenchaTouchApp.view.ProfilePage', {
    extend: 'Ext.Panel',
    id:   'profilePage',
    xtype:   'profilepage',
    config: {
        fullscreen: true,
        layout: 'vbox',
        items:[
            {
                xtype:  'searchbar',
                cls: 'header'
            },
            {
                xtype: 'profilelist',
                flex: 1
            }
        ]
    }
});
