Ext.define('SenchaTouchApp.store.Profile',{
    extend: 'Ext.data.Store',
    config:{
        model: 'SenchaTouchApp.model.Profile',
        autoload: true,
        storeId: 'Profile',
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

