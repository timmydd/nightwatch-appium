var utils = require('util');

var calculatorCommands = {
    generateLocator: function(elementName, value) {
        var element = this.elements[elementName.slice(1)];
        return utils.format(element.selector, value);
    },

    clickNumber: function(numberToClick) {
        return this.click(this.generateLocator('@numberKey', numberToClick));
    },

    clickPlus: function() {
        return this.click('@plus');
    },

    clickMinus: function() {
        return this.click('@minus');
    },

    clickMultiply: function() {
        return this.click('@multiply');
    },

    clickEquals: function() {
        return this.click('@equals');
    },

    assertResult: function(result) {
        return this.assert.attributeEquals('@result', 'text', result);
            
    }
}

module.exports = {
    commands: [calculatorCommands],

    elements: {
        numberKey: {
            selector: '//android.widget.Button[@resource-id="com.android.calculator2:id/digit_%s"]',
            // selector: '//android.widget.Button[@resource-id="com.android.calculator2:id/digit_' + number + '"]',
            locateStrategy: 'xpath' 
        },

        plus: {
            selector: '//android.widget.Button[@resource-id="com.android.calculator2:id/op_add"]',
            locateStrategy: 'xpath' 
        },

        minus: {
            selector: '//android.widget.Button[@resource-id="com.android.calculator2:id/op_sub"]',
            locateStrategy: 'xpath'
        },

        multiply: {
            selector: '//android.widget.Button[@resource-id="com.android.calculator2:id/op_mul"]',
            locateStrategy: 'xpath'
        },

        equals: {
            selector: '//android.widget.Button[@resource-id="com.android.calculator2:id/eq"]',
            locateStrategy: 'xpath' 
        },

        result: {
            selector: '//android.widget.TextView[@resource-id="com.android.calculator2:id/result"]',
            locateStrategy: 'xpath' 
        }
    }
}