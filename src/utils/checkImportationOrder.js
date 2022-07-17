const checkImportationOrder = event =>
  !(event.cityOrigin && event.stateOrigin) && event.countryName

module.exports = { checkImportationOrder }
