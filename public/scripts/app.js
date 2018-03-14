'use strict';

var fullName = "Matt Barnett";

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

console.log(getFirstName(fullName));

var getFirstNameTwo = function getFirstNameTwo(name) {
    return name.split(' ')[1];
};

console.log(getFirstNameTwo(fullName));
