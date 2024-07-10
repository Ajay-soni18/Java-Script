// Signleton using Object.create

// Object literals
// key : value 
const mysymbol= Symbol("key1"); // declaration of Symbol
const JsUser={
    name:"Ajay",
    age:21,
    [mysymbol]:13,
    place:"Jaipur",
    year:"3rd",
    "Dream_company":"Any Company which is paying 24Lac as base" // different way to access this key
}
console.log(JsUser.place)
console.log(JsUser["Dream_company"])
console.log(JsUser[mysymbol]) // key as symbol

// to freeze Object
Object.freeze(JsUser)
JsUser.place="bidasar"
console.log(JsUser.place)


