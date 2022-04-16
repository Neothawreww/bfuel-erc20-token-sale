var BitToken = artifacts.require('BitToken');

module.exports = function (deployer, network, accounts) {
    console.log('---------2----------');
    deployer.deploy(BitToken);
};

