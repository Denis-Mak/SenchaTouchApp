Ext.define('SenchaTouchApp.view.SearchResultList',{
    extend: 'Ext.dataview.List',
    requires: 'SenchaTouchApp.view.SearchResultItem',
    xtype:  'searchresultlist',
    id: 'searchResultList',
    config: {
        defaultType: 'searchresultitem',
        useSimpleItems: false,
        useComponents: true,
        store:  'Document'
    }
});
