const fullName = "Matt Barnett"

const getFirstName = (name) => {
    return name.split(' ')[0];
}

console.log(getFirstName(fullName))


const getFirstNameTwo = (name) => name.split(' ')[1];

console.log(getFirstNameTwo(fullName))