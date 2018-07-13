module.exports = {
    '@tags' : ['subtraction'],

    '1-1=0' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(1)
        calculator.clickMinus();
        calculator.clickNumber(1)
        calculator.clickEquals();
        calculator.assertResult('0');
        client.end();
    },

    '2-1=1' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(2)
        calculator.clickMinus();
        calculator.clickNumber(1)
        calculator.clickEquals();
        calculator.assertResult('1');
        client.end();
    },

    '3-1=2' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(3)
        calculator.clickMinus();
        calculator.clickNumber(1)
        calculator.clickEquals();
        calculator.assertResult('2');
        client.end();
    },

    '5-2=3' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(5)
        calculator.clickMinus();
        calculator.clickNumber(2)
        calculator.clickEquals();
        calculator.assertResult('3');
        client.end();
    },

    '10-3=7' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(1);
        calculator.clickNumber(0);
        calculator.clickMinus();
        calculator.clickNumber(3)
        calculator.clickEquals();
        calculator.assertResult('7');
        client.end();
    },
}