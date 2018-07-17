module.exports = {
    '@tags' : ['delete'],

    'When I enter a number, I can delete that number' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(1);
        calculator.clickDelete();
        calculator.assertResult('');
        client.end();
    },

    'When I do a calculation, I can clear that calculation' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(1);
        calculator.clickPlus();
        calculator.clickNumber(5);
        calculator.clickEquals();
        calculator.clickDelete();
        calculator.assertResult('');
        client.end();
    },

    'When I do a calculation containing decimal places, I can clear that calculation' : function (client) {    
        var calculator = client.page.calculator();

        calculator.clickNumber(1);
        calculator.clickPlus();
        calculator.clickNumber(5);
        calculator.clickDecimal();
        calculator.clickNumber(5);
        calculator.clickEquals();
        calculator.clickDelete();
        calculator.assertResult('');
        client.end();
    }
}