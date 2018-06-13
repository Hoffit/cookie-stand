'use strict';
/**
 * This program is created as a part of a training exercise. The program projects hourly sales
 * at several retail locations for a hypothetical Salmon Cookie shop business.
 */

//The locations for which to report sales figures
var cookieShopLocations = [];

//Get the DOM table object to populate with location sales information.
var cookieShopLocationTable = document.getElementById('CookieShopSalesTable');

/**
 * Cookie Shop Object with constructor and methods.
 *
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
CookieShop.prototype.calculateCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour; 
};

//Use the simulated customer data from calculateCustomersPerHour to create hourly sales projections.
CookieShop.prototype.calculateCookiesPerHour = function() {
  var hoursOpen = (this.closingTime-this.openingTime)/100;
  for(var i=0; i<hoursOpen; i++) {
    this.hourlyProjections[i] = this.calculateCustomersPerHour();
    this.totalCookiesPerDay += this.hourlyProjections[i];
  }
};

//Create the table header, one column for each hour of shop data.
CookieShop.renderHeader = function () {
  var headerRow = document.createElement('tr');
  var headings = ['6:00am','7:00am','8:00a,','9:00am', '10:00am', '11:00', '12:00pm',
    '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
  for(var i=0; i<headings.length; i++) {
    var thElement = document.createElement('th');// 1. create th elements
    thElement.textContent = headings[i];// 2. fill in their content
    headerRow.appendChild(thElement);// 3. append th to headerRow
    cookieShopLocationTable.appendChild(headerRow);
  }
};

//Enable shop instance to populate table row with their hourly sales projections
CookieShop.prototype.renderRow = function() {
  var trElement = document.createElement('tr');// create tr
  //Populate first cell in row with shop name
  var tdElement = document.createElement('td');// create td
  tdElement.textContent = this.locationName;// give td content
  trElement.appendChild(tdElement);// append td to tr
  //Now loop through each hour and populate the cell with sales projection
  var hoursOpen = (this.closingTime-this.openingTime)/100;
  for(var i=0; i<hoursOpen; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyProjections[i];
    trElement.appendChild(tdElement);
  }
  cookieShopLocationTable.appendChild(trElement);
};

//Enable shop instance to populate table row with their hourly sales projections
CookieShop.prototype.renderFooter = function() {
  var trElement = document.createElement('tr');// create tr
  //Populate first cell in row with "Total" string
  var tdElement = document.createElement('td');// create td
  tdElement.textContent = 'Total';// give td content
  trElement.appendChild(tdElement);// append td to tr
  //Now loop through each hour and populate the cell with total sales projection
  var hoursOpen = (this.closingTime-this.openingTime)/100;
  for(var i=0; i<hoursOpen; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalCookiesPerDay;
    trElement.appendChild(tdElement);
  }
  cookieShopLocationTable.appendChild(trElement);
};

//Instantiate five cookie shop objects.
new CookieShop('1st and Pike', 23, 65, 6.3);
new CookieShop('SeaTac Airport', 3, 24, 1.2);
new CookieShop('Seattle Center', 11, 38, 3.7);
new CookieShop('Capitol Hill', 20, 38, 2.3);
new CookieShop('Alki', 2, 16, 4.6);

//Convenience method to loop through and render all the shops sales data.
CookieShop.renderAllShops = function() {
  for(var i=0; i<cookieShopLocations.length; i++) {
    cookieShopLocations[i].renderRow();
  }
};

CookieShop.renderHeader();
CookieShop.renderAllShops();
/**
 * This foot business is tricky - work it out.
 */
//CookieShop.renderFooter();