'use strict';
/**
 * This program is created as a part of a training exercise. The program projects hourly sales
 * at several retail locations for a hypothetical Salmon Cookie shop business.
 */

//The locations for which to report sales figures
var cookieShopLocations = [];

//Create a totals array for each hour stores are open
//Initialize with zeroes otherise result is NAN later
var hourlySalesTotal = [];

//Get the DOM table object to populate with location sales information.
var cookieShopLocationTable = document.getElementById('CookieShopSalesTable');

//Get the DOM form object to support user addition of new store locations
var newLocationForm = document.getElementById('store-sales-form');

/**
 * Cookie Shop Object with constructor and methods.
 */
function CookieShop(locationName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.openingTime = '0600';
  this.closingTime = '2100';
  this.hourlyProjections = [];
  this.totalCookiesPerDay = 0;
  this.calculateCookiesPerHour();
  cookieShopLocations.push(this);
}

//Simulate real sales data using random number of customers in a range.
CookieShop.prototype.calculateCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
};

//Use the simulated customer data from calculateCustomersPerHour to create hourly sales projections.
CookieShop.prototype.calculateCookiesPerHour = function () {
  var hoursOpen = (this.closingTime - this.openingTime) / 100;
  for (var i = 0; i < hoursOpen; i++) {
    this.hourlyProjections[i] = this.calculateCustomersPerHour();
    this.totalCookiesPerDay += this.hourlyProjections[i];
  }
};

//Create the table header, one column for each hour of shop data.
CookieShop.renderHeader = function () {
  var tableHead = document.createElement('thead');
  var headerRow = document.createElement('tr');
  var headings = ['', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00', '12:00pm',
    '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];
  for (var i = 0; i < headings.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = headings[i];
    headerRow.appendChild(thElement);
  }
  tableHead.appendChild(headerRow);
  cookieShopLocationTable.appendChild(tableHead);
};

//Enable shop instance to populate table row with their hourly sales projections
CookieShop.prototype.renderRow = function () {

  //Grab parent element for new table row
  var tBodyElement = cookieShopLocationTable.childNodes[1];
  var trElement = document.createElement('tr');// create tr

  //Populate first cell in row with shop name
  var tdElement = document.createElement('td');// create td

  tdElement.textContent = this.locationName;// give td content
  trElement.appendChild(tdElement);// append td to tr

  //Now loop through each hour and populate the cell with sales projection
  var hoursOpen = (this.closingTime - this.openingTime) / 100;
  for (var i = 0; i < hoursOpen; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyProjections[i];
    trElement.appendChild(tdElement);
  }

  //Add the location total as the last td/cell in the row
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalCookiesPerDay;
  trElement.appendChild(tdElement);

  //Finally - add the newly populated row to the table.
  tBodyElement.appendChild(trElement);
};

//Enable shop instance to populate table row with their hourly sales projections
CookieShop.renderFooter = function () {
  var totalTotal = 0;//The total of all the hourly totals
  var tfoot = document.createElement('tfoot');
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Total';
  trElement.appendChild(tdElement);

  //Loop through the 15 hours of open time, and populate sums
  var hourlyTotal = 0;
  for (var i = 0; i < hourlySalesTotal.length; i++) {
    tdElement = document.createElement('td');
    hourlyTotal = hourlySalesTotal[i];
    tdElement.textContent = hourlyTotal;
    trElement.appendChild(tdElement);
    totalTotal += hourlyTotal;
  }

  //Add the bottom right cell to the table -> total of totals
  tdElement = document.createElement('td');
  tdElement.textContent = totalTotal;
  trElement.appendChild(tdElement);

  tfoot.appendChild(trElement);
  cookieShopLocationTable.appendChild(tfoot);
};

//Convenience method to loop through and render all the shops sales data.
CookieShop.renderAllShops = function () {
  for (var i = 0; i < cookieShopLocations.length; i++) {
    cookieShopLocations[i].renderRow();
  }
};

//Build out hourly totals array for table footer
CookieShop.calculateHourlyTotals = function () {

  //Initialize/reset totals array
  var numberOfHourlyProjections = cookieShopLocations[0].hourlyProjections.length;
  for (var k = 0; k < numberOfHourlyProjections; k++) {
    hourlySalesTotal[k] = 0;
  }

  for (var i = 0; i < cookieShopLocations.length; i++) {
    var aCookieShop = cookieShopLocations[i];
    for (var j = 0; j < numberOfHourlyProjections; j++) {
      hourlySalesTotal[j] += aCookieShop.hourlyProjections[j];
    }
  }
};

// Callback function for when the form is submitted
CookieShop.addNewCookieShop = function (event) {
  // always put this first, it will prevent the default behavior of the browser, which is to refresh the page when the form is submitted
  event.preventDefault();

  var newLocationName = event.target.locationName.value;
  var newMinCustomersPerHour = parseInt(event.target.minCustomersPerHour.value);
  var newMaxCustomersPerHour = parseInt(event.target.maxCustomersPerHour.value);
  var newAverageCookiesPerCustomer = parseFloat(event.target.averageCookiesPerCustomer.value);

  new CookieShop(newLocationName, newMinCustomersPerHour, newMaxCustomersPerHour, newAverageCookiesPerCustomer);

  //Reset the body and footer parts of table in prep for re-render
  cookieShopLocationTable.replaceChild(
    document.createElement('tbody'),
    cookieShopLocationTable.childNodes[1]);
  cookieShopLocationTable.removeChild(cookieShopLocationTable.lastChild);

  //Render the sales data table
  CookieShop.calculateHourlyTotals();
  CookieShop.renderAllShops();
  CookieShop.renderFooter();
};

//Instantiate five cookie shop objects.
new CookieShop('1st and Pike', 23, 65, 6.3);
new CookieShop('SeaTac Airport', 3, 24, 1.2);
new CookieShop('Seattle Center', 11, 38, 3.7);
new CookieShop('Capitol Hill', 20, 38, 2.3);
new CookieShop('Alki', 2, 16, 4.6);

// Add the event listener to the form
newLocationForm.addEventListener('submit', CookieShop.addNewCookieShop);

//Render the sales data table
CookieShop.renderHeader();
CookieShop.renderAllShops();
CookieShop.calculateHourlyTotals();
CookieShop.renderFooter();