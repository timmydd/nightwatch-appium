module.exports = {
    'Demo test Google' : function (client) {
    
        var calculator = client.page.calculator();

        // calculator.clickNumber(9);
        calculator.click(calculator.generateLocator('@numberKey', 4))
        calculator.clickPlus();
        calculator.clickNumber(3);
        calculator.clickEquals();
        calculator.getResult();
       

        client.end();
    }
};