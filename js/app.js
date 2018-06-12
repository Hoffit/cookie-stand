'use strict';

/**
 * This program is created as a part of a training exercise. The program is a ...
 */

//Object literal creation...
/**
 *
 */
//1st and Pike
var firstAndPike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  openingTime: '0600',
  closingTime: '2100',
  hourlyProjections: [],
  calculateCustomersPerHour : function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour; //The maximum is exclusive and the minimum is inclusive
  },
  calculateCookiesPerHour: function() {
    var hoursOpen = (this.closingTime-this.openingTime)/100;
    for(var i=0;i<hoursOpen;i++) {
      this.hourlyProjections[i] = this.calculateCustomersPerHour();
    }
  },
  renderStoreProjections : function() {
    var ulElement = document.getElementById('firstAndPike');
    var startTime = parseInt(this.openingTime/100);
    var currentHour = startTime;
    for(var i=0;i<this.hourlyProjections.length;i++) {
      var liEl = document.createElement('li');
      var hourMsg = (currentHour>12 ? (currentHour-12)+'pm: ' : (currentHour+'am: '));
      liEl.textContent = hourMsg+this.hourlyProjections[i]+' cookies';
      ulElement.appendChild(liEl);
      currentHour++;
    }
  }
};
firstAndPike.calculateCookiesPerHour();
firstAndPike.renderStoreProjections();

//SeaTac Airport
var seaTacAirport = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesPerCustomer: 1.2,
  openingTime: '0600',
  closingTime: '2100',
  hourlyProjections: [],
  calculateCustomersPerHour : function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour; //The maximum is exclusive and the minimum is inclusive
  },
  calculateCookiesPerHour: function() {
    var hoursOpen = (this.closingTime-this.openingTime)/100;
    for(var i=0;i<hoursOpen;i++) {
      this.hourlyProjections[i] = this.calculateCustomersPerHour();
    }
  },
  renderStoreProjections : function() {
    var ulElement = document.getElementById('seaTacAirport');
    var startTime = parseInt(this.openingTime/100);
    var currentHour = startTime;
    for(var i=0;i<this.hourlyProjections.length;i++) {
      var liEl = document.createElement('li');
      var hourMsg = (currentHour>12 ? (currentHour-12)+'pm: ' : (currentHour+'am: '));
      liEl.textContent = hourMsg+this.hourlyProjections[i]+' cookies';
      ulElement.appendChild(liEl);
      currentHour++;
    }
  }
};
seaTacAirport.calculateCookiesPerHour();
seaTacAirport.renderStoreProjections();

//Seattle Center
var seattleCenter = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPerCustomer: 3.7,
  openingTime: '0600',
  closingTime: '2100',
  hourlyProjections: [],
  calculateCustomersPerHour : function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour; //The maximum is exclusive and the minimum is inclusive
  },
  calculateCookiesPerHour: function() {
    var hoursOpen = (this.closingTime-this.openingTime)/100;
    for(var i=0;i<hoursOpen;i++) {
      this.hourlyProjections[i] = this.calculateCustomersPerHour();
    }
  },
  renderStoreProjections : function() {
    var ulElement = document.getElementById('seattleCenter');
    var startTime = parseInt(this.openingTime/100);
    var currentHour = startTime;
    for(var i=0;i<this.hourlyProjections.length;i++) {
      var liEl = document.createElement('li');
      var hourMsg = (currentHour>12 ? (currentHour-12)+'pm: ' : (currentHour+'am: '));
      liEl.textContent = hourMsg+this.hourlyProjections[i]+' cookies';
      ulElement.appendChild(liEl);
      currentHour++;
    }
  }
};
seattleCenter.calculateCookiesPerHour();
seattleCenter.renderStoreProjections();

//Capitol Hill
var capitolHill = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  averageCookiesPerCustomer: 2.3,
  openingTime: '0600',
  closingTime: '2100',
  hourlyProjections: [],
  calculateCustomersPerHour : function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour; //The maximum is exclusive and the minimum is inclusive
  },
  calculateCookiesPerHour: function() {
    var hoursOpen = (this.closingTime-this.openingTime)/100;
    for(var i=0;i<hoursOpen;i++) {
      this.hourlyProjections[i] = this.calculateCustomersPerHour();
    }
  },
  renderStoreProjections : function() {
    var ulElement = document.getElementById('capitolHill');
    var startTime = parseInt(this.openingTime/100);
    var currentHour = startTime;
    for(var i=0;i<this.hourlyProjections.length;i++) {
      var liEl = document.createElement('li');
      var hourMsg = (currentHour>12 ? (currentHour-12)+'pm: ' : (currentHour+'am: '));
      liEl.textContent = hourMsg+this.hourlyProjections[i]+' cookies';
      ulElement.appendChild(liEl);
      currentHour++;
    }
  }
};
capitolHill.calculateCookiesPerHour();
capitolHill.renderStoreProjections();

//Alki
var alki = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averageCookiesPerCustomer: 4.6,
  openingTime: '0600',
  closingTime: '2100',
  hourlyProjections: [],
  calculateCustomersPerHour : function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour; //The maximum is exclusive and the minimum is inclusive
  },
  calculateCookiesPerHour: function() {
    var hoursOpen = (this.closingTime-this.openingTime)/100;
    for(var i=0;i<hoursOpen;i++) {
      this.hourlyProjections[i] = this.calculateCustomersPerHour();
    }
  },
  renderStoreProjections : function() {
    var ulElement = document.getElementById('alki');
    var startTime = parseInt(this.openingTime/100);
    var currentHour = startTime;
    for(var i=0;i<this.hourlyProjections.length;i++) {
      var liEl = document.createElement('li');
      var hourMsg = (currentHour>12 ? (currentHour-12)+'pm: ' : (currentHour+'am: '));
      liEl.textContent = hourMsg+this.hourlyProjections[i]+' cookies';
      ulElement.appendChild(liEl);
      currentHour++;
    }
  }
};
alki.calculateCookiesPerHour();
alki.renderStoreProjections();