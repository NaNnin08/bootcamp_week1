//javascript pada umumnya merupakan bahasa pemrograman yang funtional orientied 

//regular function
function say() {
    return "Hello World";
}

console.log(say());

//function expression
const fnc_exp = function (value) {
    return value;
}

//function expression with name
const fnc_expN = function foo(value) {
    return value;
}

//arrow function
const arrow_fnc = () => {
    return "Arrow";
}

console.log(arrow_fnc());

//genap ganjil
const gege = parm => {
    if(parm%2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Apakah parameter genap: "+gege(99));