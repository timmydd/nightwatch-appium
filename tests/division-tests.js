module.exports = {
    '@tags' : ['division'],

    '1/1=1' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(1)
        calculator.clickDivide();
        calculator.clickNumber(1)
        calculator.clickEquals();
        calculator.assertResult('1');
        client.end();
    },

    '3/1=3' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(3)
        calculator.clickDivide();
        calculator.clickNumber(1)
        calculator.clickEquals();
        calculator.assertResult('3');
        client.end();
    },

    '20/5=4' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(2)
        calculator.clickNumber(0)
        calculator.clickDivide();
        calculator.clickNumber(5)
        calculator.clickEquals();
        calculator.assertResult('4');
        client.end();
    }
}