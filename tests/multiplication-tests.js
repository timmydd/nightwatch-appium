module.exports = {
    '@tags' : ['multiplication'],

    '1x1=1' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(1)
        calculator.clickMultiply();
        calculator.clickNumber(1)
        calculator.clickEquals();
        calculator.assertResult('1');
        client.end();
    },

    '2x2=4' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(2)
        calculator.clickMultiply();
        calculator.clickNumber(2)
        calculator.clickEquals();
        calculator.assertResult('4');
        client.end();
    },

    '3x3=9' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(3)
        calculator.clickMultiply();
        calculator.clickNumber(3)
        calculator.clickEquals();
        calculator.assertResult('9');
        client.end();
    },

    '4x4=16' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(4)
        calculator.clickMultiply();
        calculator.clickNumber(4)
        calculator.clickEquals();
        calculator.assertResult('16');
        client.end();
    },

    '5x5=25' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(5)
        calculator.clickMultiply();
        calculator.clickNumber(5)
        calculator.clickEquals();
        calculator.assertResult('25');
        client.end();
    },

    '6x6=36' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(6)
        calculator.clickMultiply();
        calculator.clickNumber(6)
        calculator.clickEquals();
        calculator.assertResult('36');
        client.end();
    },
}