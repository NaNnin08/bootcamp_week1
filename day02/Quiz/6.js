function isCharUnique(s) {
    let arr = s.split("").sort();
    let display;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            display = false;
            break;
        } else {
            display = true;
        }
    }        

    return display;
}

console.log(isCharUnique("abcdefg"));
console.log(isCharUnique("abcdefga"));
