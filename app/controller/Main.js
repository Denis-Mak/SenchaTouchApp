Ext.define ('SenchaTouchApp.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        routes:{
            'profile/:profileId': 'showDocuments',
            '': 'showProfiles'
        },
        refs: {
            startPage: '#startPage',
            selectionPage: 'selectionpage',
            selPageHeader: 'selectionpage #header',
            profileList: 'profilelist',
            docList: 'searchresultlist'
        },
        control: {
            profileList: {
                itemtap: 'onProfileTap'
            }
        }
    },

    showProfiles: function(){
        this.getStartPage().setActiveItem(0);
    },

    onProfileTap: function(list, itemIndex){
        var record = list.getStore().getAt(itemIndex);

        this.showDocuments(record.get('id'), record.get('name'));
    },

    showDocuments: function(profileId, profileName){
        var docStore = this.getDocList().getStore();

        docStore.getProxy().setUrl(AppConfig.restApiPath + 'documents.' + profileId + '.js');
        docStore.on('load', function(){
            //ToDo Вынести эти вызовы в обработчик события load списка
            Ext.getCmp('deletePanel').getDropHandler().enable();
            Ext.getCmp('keepPanel').getDropHandler().enable();
        });
        docStore.load();

        if (profileName == null){
            var profileStore = this.getProfileList().getStore();
            if (!profileStore.isLoaded()){
                profileStore.load();
            }
            profileName = profileStore.getById(profileId).get('name');
        }
        this.getSelPageHeader().setHtml(profileName);
        this.getStartPage().setActiveItem(1);
        //this.getApplication().getHistory().add(Ext.create('Ext.app.Action', { url: 'profile/' + profileId }));
    }
});