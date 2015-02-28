﻿Ext.define('Ext.ux.binder.GridRequiredBinder', {
    implement: 'IGridMetaDataBinder',
    requiredCellCls: 'requiredGridCell',

    onInit: function (grid, plugin) { },
    onDestroy: function (grid, plugin) { },

    onRender: function(metadata, record, rowIndex, colIndex, store, view) {
        var dataIndex = metadata.column.dataIndex;

        if (record.getMeta(dataIndex, 'required')) {
            metadata.tdCls += ' ' + this.requiredCellCls;
        }
    }

});