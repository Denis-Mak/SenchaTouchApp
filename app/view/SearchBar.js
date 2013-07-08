Ext.define('SenchaTouchApp.view.SearchBar', {
    extend:     'Ext.Toolbar',
    xtype:      'searchbar',
    requires:   ['Ext.field.Search'],
    config: {
        items: [
            {
                xtype: 'searchfield'
            }]
    }
});
