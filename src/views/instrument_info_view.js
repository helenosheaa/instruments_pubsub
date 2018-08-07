const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument', (evt) => {
    const chosenInstrument = evt.detail;
    this.render(chosenInstrument);
  });
};

InstrumentInfoView.prototype.render = function (instrument) {
  const instrumentHeader = document.createElement('h1');
  const instrumentInfo = document.createElement('p');
  instrumentHeader.textContent = `${instrument.name}`;
  instrumentInfo.textContent = `${instrument.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(instrumentHeader);
  this.container.appendChild(instrumentInfo);
};

module.exports = InstrumentInfoView;
