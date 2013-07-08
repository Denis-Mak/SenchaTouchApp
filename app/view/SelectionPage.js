Ext.define('SenchaTouchApp.view.SelectionPage', {
    extend: 'Ext.Panel',
    id:   'selectionPage',
    xtype: 'selectionpage',
    config: {
        layout: {
            type:   'vbox'
        },
        items:[
            {
                xtype:  'container',
                id:     'header',
                cls:    'header',
                html:   'Название профиля'
            },
            {
                xtype:  'panel',
                layout: 'hbox',
                flex:   1,
                items:[
                    {
                        xtype: 'deletepanel',
                        width:  40
                    },
                    {
                        xtype: 'searchresultlist',
                        id: 'draggsCnt',
                        flex: 1
                    },
                    {
                        xtype: 'keeppanel',
                        width: 40
                    }
                ]
            }
        ]
    }
});
