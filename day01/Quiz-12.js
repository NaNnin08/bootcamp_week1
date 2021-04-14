function showGenap(s) {
    let arr = s.split("");
    let display = "";
    for (let i = 0; i < arr.length; i++) {
        if(parseInt(arr[i])%2===0) {
            display += arr[i] + " ";
        }        
    }
    return display;
}

console.log(showGenap("234567"));

