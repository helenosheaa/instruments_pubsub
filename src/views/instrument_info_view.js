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
  const listHeader = document.createElement('h2');
  // const musicalInstrumentsUL = document.createElement('ul');
  const musicalInstrumentsList = document.createElement('li');
  instrumentHeader.textContent = `${instrument.name}`;
  instrumentInfo.textContent = `${instrument.description}`;
  console.dir(instrument);
  listHeader.textContent = `Instruments Including:`
  musicalInstrumentsList.textContent = `${instrument.instruments}`
  // instruments.forEach(function(instrument) {})
  this.container.innerHTML = '';
  this.container.appendChild(instrumentHeader);
  this.container.appendChild(instrumentInfo);
  this.container.appendChild(listHeader);
  this.container.appendChild(musicalInstrumentsList);
  // musicalInstrumentsUL.appendChild(musicalInstrumentsList);


};

module.exports = InstrumentInfoView;
