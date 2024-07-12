// for of

// ["", "", ""]
// [{}, {}, {}] array of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // for of loop
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() // declaring data structure map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // only store unique values


// console.log(map);

for (const [key, value] of map) { // to separate out keys and value from the map
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // for of loop itration not possible om onjects
//     console.log(key, ':-', value);
    
// }