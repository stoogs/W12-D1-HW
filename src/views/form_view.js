const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.number.value);
    const inputtedText = event.target.number.value;
    console.log(inputtedText);
    PubSub.publish('NumberInputView:number-submitted', inputtedText);
  });
};

module.exports = FormView;
