﻿Ext.defineInterface('IMetaDataBinder', {
    inherit: 'ISingleton',
    methods: [
        'getMetaDataName',
        'isApplicable',
        'onComponentBound',
        'onComponentUnbound',
        'applyMetaData'//(control, metaDataFieldName, metaValue, model, fieldName)
    ]
});