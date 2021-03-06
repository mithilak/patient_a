Ext.define('WireFrameTwo.store.HBAstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.CommonModel'],
    alias : 'store.HBAstore',
    config : {
        storeId : 'HBAstore',
        model : 'WireFrameTwo.model.CommonModel',
        filters : { property : "type", value : "hba1c"},
        autoLoad : true
    }
})
