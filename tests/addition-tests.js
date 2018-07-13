module.exports = {
    '@tags' : ['addition'],

    '1+1=2' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(1)
        calculator.clickPlus();
        calculator.clickNumber(1)
        calculator.clickEquals();
        calculator.assertResult('2');
        client.end();
    },

    '2+2=4' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(2)
        calculator.clickPlus();
        calculator.clickNumber(2)
        calculator.clickEquals();
        calculator.assertResult('4');
        client.end();
    },

    '3+3=6' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(3)
        calculator.clickPlus();
        calculator.clickNumber(3)
        calculator.clickEquals();
        calculator.assertResult('6');
        client.end();
    },

    '4+4=8' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(4)
        calculator.clickPlus();
        calculator.clickNumber(4)
        calculator.clickEquals();
        calculator.assertResult('8');
        client.end();
    },

    '5+5=10' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(5)
        calculator.clickPlus();
        calculator.clickNumber(5)
        calculator.clickEquals();
        calculator.assertResult('10');
        client.end();
    }
};