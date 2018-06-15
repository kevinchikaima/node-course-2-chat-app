var moment = require('moment');

// var date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var currentTime = moment(createdAt);
console.log(currentTime.format('h:mm a'));
