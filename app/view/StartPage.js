Ext.define('SenchaTouchApp.view.StartPage', {
    extend: 'Ext.Container',
    id:   'startPage',
    config: {
        fullscreen: true,
        layout: 'card',
        activeItem: 0,
        items:[
            {
                xtype:  'profilepage'
            },
            {
                xtype: 'selectionpage'
            }
        ]
    }
});
