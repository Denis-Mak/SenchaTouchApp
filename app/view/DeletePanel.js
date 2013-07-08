Ext.define('SenchaTouchApp.view.DeletePanel',{
    extend: 'SenchaTouchApp.view.DroppableContainer',
    xtype: 'deletepanel',
    id: 'deletePanel',
    config: {
        cls: 'delete-panel',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },
        items: [
            {
                xtype: 'button',
                ui: 'neutral',
                style: 'padding: 0; width: 28px; height: 28px;',
                iconCls: 'delete'
            }
        ]
    }
});
