Ext.define('WireFrameTwo.store.DBPstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.ReportModel'],
    alias : 'store.DBPstore',
    config : {
        storeId : 'DBPstore',
        model : 'WireFrameTwo.model.ReportModel',
        filters : { property : "type", value : "type6"},
        autoLoad : true
    }
})
