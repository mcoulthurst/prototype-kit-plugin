//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here


// Add a custom 'split' filter
addFilter('split', function(str, delimiter) {
  return str.split(delimiter);
});
