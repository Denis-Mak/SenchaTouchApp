Ext.define('SenchaTouchApp.store.Document',{
    extend: 'Ext.data.Store',
    config:{
        model: 'SenchaTouchApp.model.Document',
        storeId: 'Document',
        proxy: {
            type: 'rest',
            url: AppConfig.restApiPath + 'documents.1.js',
            reader: {
                type:           'json',
                rootProperty:   'documents'
            }
        },
        autoLoad: true
    }
});
