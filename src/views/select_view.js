const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element){
  this.element =  element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments', (evt) => {
    const allInstruments = evt.detail;
    console.log(allInstruments);
  })
};

module.exports = SelectView;
