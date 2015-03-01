﻿Ext.define('demo.MainModel', {
    extend: 'Ext.ux.data.AsyncModel',
    validateOnMetaDataChange: true,
    fields: [
        { name: 'field1', type: 'string', required: true, requiredMessage: 'Required field' },
        { name: 'field2', type: 'string', required: true },
        { name: 'field3', type: 'bool', defaultValue: false },
        { name: 'field4', type: 'asyncmodel', model: 'demo.NestedModel' }
    ],

    businessRules: {
        field3Change: function(value, callback) {
            this.setMeta('field2', 'readOnly', value);
            callback();
        }
    },

    validationRules: {
        field1: 'IValidationService.validateField1',
        field2: [{ type: 'exclusion', list: ['excluded'] }, 'IValidationService.validateField2']
    }
});