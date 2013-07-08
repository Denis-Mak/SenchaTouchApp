Ext.define('SenchaTouchApp.controller.DragDrop', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.util.Draggable',
        'Ext.ux.util.Draggable',
        'Ext.ux.util.Droppable',
        'Ext.util.DelayedTask'
    ],

    config: {
        refs: {
            draggsCnt: 'searchresultitem',
            dropLeftCnt: 'deletepanel',
            dropRightCnt: 'keeppanel',
            docList: 'searchresultlist'
        },

        control: {
            draggsCnt: {
                initialize: 'onDraggsCntInit'
            },
            dropLeftCnt: {
                initialize: 'onDropCntInit'
            },
            dropRightCnt: {
                initialize: 'onDropCntInit'
            }
        }
    },

    onDraggsCntInit: function(cnt) {
        var me = this;
        console.log('Init draggs');
        cnt.setDraggable(true);
        me.initDraggableItem(cnt);
    },

    initDraggableItem: function(item) {
        var me = this;
        if (Ext.isDefined(item.draggableBehavior)) {
            var draggable = item.draggableBehavior.getDraggable();

            draggable.group = 'base';// Default group for droppable
            draggable.revert = true;

            draggable.setConstraint({
                min: { x: -Infinity, y: -Infinity },
                max: { x: Infinity, y: Infinity }
            });

            draggable.on({
                scope: me,
                dragstart: me.onDragStart,
                dragend: me.onDragEnd
            });
            item.element.on ('touchstart', me.onTouchStart(item), this);
        }
    },

    onDragStart: function() {
        console.log('Start dragging', arguments);
    },

    onDragEnd: function() {
        console.log('End of dragging', arguments);
        this.getDocList().getScrollable().getScroller().setDisabled(true);
    },

    onDropCntInit: function(cnt) {
       var me = this;
       var task = Ext.create('Ext.util.DelayedTask', function() {


            var drop = Ext.create('Ext.ux.util.Droppable', {
                element: cnt.element
            });

            drop.on({
                scope: me,
                drop: me.onDrop
            });

            drop.cleared = false;
            if (Ext.isDefined(cnt._dropHandler)){
                cnt.setDropHandler(drop);
            }
            console.log('Droppable init', drop);
        });

       task.delay(5);
    },

    onDrop: function(droppable, draggable) {
        var me = this;
        console.log('Dropped', arguments);

        var dropCnt = Ext.getCmp(droppable.getElement().getId());
        var dragg = Ext.getCmp(draggable.getElement().getId());
        var record = dragg.getRecord();

        if (!droppable.cleared) {
            dropCnt.setHtml('');
            droppable.cleared = true;
        }

        dropCnt.insert(1, Ext.create('Ext.Container', {
            xtype: 'container',
            html: record.get('id'),
            cls: 'x-button',
            style: 'padding: 0; width: 28px; height: 28px;'
        }));

        record.stores[0].remove(record);
        dragg.hide();
    },

    onTouchStart: function(item){
        this.getDocList().getScrollable().getScroller().setDisabled(true);
        var touchedElm  = item.element,
            xy          = touchedElm.getXY(),
            left        = xy[0],
            top         = xy[1],
            size        = touchedElm.getSize();
        item.setTop(top);
        item.setLeft(left);
        Ext.Viewport.add(item);
    }
});
