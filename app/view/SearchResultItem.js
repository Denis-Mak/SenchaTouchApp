Ext.define ('SenchaTouchApp.view.ItemTitle',{
    extend: 'Ext.Container',
    itemData: {
        title: '',
        snippet: '',
        url: ''
    },
    config:{},
    constructor:function (config) {
        this.callParent(arguments);
    },

    setTitle: function(title){
        this.itemData.title = title;
    },
    setUrl: function(url){
        this.itemData.url = url;
    },
    setSnippet: function(snippet){
        this.itemData.snippet = snippet;
    },
    setBody: function (){
        this.setHtml('<a href="' + this.itemData.url + '" target="_blank" class="title">' + this.itemData.title + '</a>'
            + '<div class="snippet">' + this.itemData.snippet + '</div>');
    }
});

Ext.define ('SenchaTouchApp.view.SearchResultItem',{
    extend: 'Ext.dataview.component.ListItem',
    require: 'Ext.util.Draggable',
    xtype: 'searchresultitem',
    config: {
        title: {
            cls: 'title'
        },
        dataMap: {
            getTitle: {
                setTitle:   'title',
                setUrl:     'url',
                setSnippet: 'snippet',
                setBody:    'id'
            }
        }
    },

    applyTitle: function(config) {
        return Ext.factory(config, SenchaTouchApp.view.ItemTitle, this.getTitle());
    },
    updateTitle: function(newTitle) {
        if (newTitle) {
            this.add(newTitle);
        }
    }
});
