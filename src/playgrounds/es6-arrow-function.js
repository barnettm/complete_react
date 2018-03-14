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

const user = {
    name: 'Matt',
    cities: ['Ontario', 'Yorba Linda', 'Alta Loma'],
    printPlacesLived() {
       const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        })
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
}

user.printPlacesLived(user.cities)

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())