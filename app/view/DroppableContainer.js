Ext.define('SenchaTouchApp.view.DroppableContainer',{
    extend: 'Ext.Container',
    config: {
        dropHandler: null
    },

    constructor: function(config){
        this.callParent(arguments);
        this.initConfig(config);
    }
});
