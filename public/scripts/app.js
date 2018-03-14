'use strict';

// const fullName = "Matt Barnett"

// const getFirstName = (name) => {
//     return name.split(' ')[0];
// }

// console.log(getFirstName(fullName))


// const getFirstNameTwo = (name) => name.split(' ')[1];

// console.log(getFirstNameTwo(fullName))

// arguments object - no longer bound with arrow functions
// const add =  (a,b) => {
//     console.log(arguments)
//     return a+b;
// }

// console.log(add(55,1))

var user = {
    name: 'Matt',
    cities: ['Ontario', 'Yorba Linda', 'Alta Loma'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
};

user.printPlacesLived(user.cities);

var multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
