Ext.define('SenchaTouchApp.view.KeepPanel',{
   extend: 'SenchaTouchApp.view.DroppableContainer',
   xtype: 'keeppanel',
   id: 'keepPanel',
   config: {
       cls: 'keep-panel',
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
               iconCls: 'compose'
           }
       ]
   }
});