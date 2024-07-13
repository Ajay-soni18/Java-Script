const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers // chainning
                .map((num) => num * 10 )
                .map( (num) => num + 1) // we put operation in the map
                .filter( (num) => num >= 40) // we put condition in the filter 

console.log(newNums);