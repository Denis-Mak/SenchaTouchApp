Ext.define('SenchaTouchApp.model.Document', {
    extend: 'Ext.data.Model',
    config:{
        fields: [
            {name:  'id',       type:   'int'},
            {name:  'title',    type:   'string'},
            {name:  'snippet',  type:   'string'},
            {name:  'url',  type:   'string'}
        ],
        proxy: {
            type: 'rest',
            url: AppConfig.restApiPath + 'documents.1.js',
            reader: {
                type:           'json',
                rootProperty:   'documents'
            }
        }
    }
});
