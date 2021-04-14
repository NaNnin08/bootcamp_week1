function maxWordLength(s) {
    let arr = s.split(" ");
    let display = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > display.length) {
            display = arr[i];
        }        
    }
    return display;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));