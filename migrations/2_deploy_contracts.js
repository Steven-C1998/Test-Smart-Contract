const SamplesSquared = artifacts.require("SamplesSquared");

module.exports = function (deployer) {
  deployer.deploy(SamplesSquared, 1000000);
};
