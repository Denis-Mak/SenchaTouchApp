Ext.define('SenchaTouchApp.model.Profile', {
    extend: 'Ext.data.Model',
    config:{
        fields: [
            {name:  'id',       type:   'int'},
            {name:  'name',     type:   'string'}
        ],
        proxy: {
            type: 'rest',
            url: AppConfig.restApiPath + 'profiles',
            reader: {
                type:           'json',
                rootProperty:   'profiles'
            }
        }
    }
});
