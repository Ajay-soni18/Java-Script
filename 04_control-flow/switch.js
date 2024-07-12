// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // if no break then it will excute below code also
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match"); // if no case matched
        break;
}