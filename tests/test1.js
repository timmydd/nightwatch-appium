module.exports = {
    '1+1=2' : function (client) {    
        var calculator = client.page.calculator();

        calculator.click(1)
        calculator.clickPlus();
        calculator.click(1)
        calculator.clickEquals();
        calculator.getResult();
        client.end();
    }
};