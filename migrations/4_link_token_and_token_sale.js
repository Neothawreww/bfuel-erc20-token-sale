var BitToken = artifacts.require('BitToken');
var BitTokenSale = artifacts.require('BitTokenSale');

module.exports = function (deployer, network, accounts) {
    var bitToken;
    var bitTokenSale;

    console.log('---------4----------');
    BitToken.deployed()
        .then(function(token) {
            bitToken = token;
            return BitTokenSale.deployed();
        })
        .then(function (token_sale) {
            bitTokenSale = token_sale;
            console.log('Changing bitToken controller...');
            return bitToken.changeController(bitTokenSale.address);
        })
        .then(function() {
            console.log('Setting bitToken in bitTokenSale...');
            return bitTokenSale.setBitToken(bitToken.address);
        })
        .then(function() {
            console.log('---DEPLOY FINISHED---');
        });
};

