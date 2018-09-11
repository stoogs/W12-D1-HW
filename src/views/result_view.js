const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeCheckResult = event.detail;
    this.displayResult(primeCheckResult);
  });
};

ResultView.prototype.displayResult = function (result) {}
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Primes are: ${result}`;
};

module.exports = ResultView;
