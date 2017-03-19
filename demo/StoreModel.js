﻿Ext.define('demo.StoreModel', {
    extend: 'Ext.ux.data.AsyncModel',
    fields: [
        { name: 'field1', type: 'string', required: true, requiredMessage: 'Required field' },
        { name: 'field2', type: 'string', required: true },
        { name: 'field3', type: 'string', storeUnique: true }
    ],

    businessRules: {
        field1ValidChange: 'IBusinessService.updateField3'
    },

    validationRules: {
        field1: 'email'
    }
});