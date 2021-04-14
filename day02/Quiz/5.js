let numbers = [1,2,3,4,5,7];

function sembilan(arr, jum) {
    let display = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length-1; j++) {
            if(arr[i] + arr[i+j] === jum) {
                display += arr[i] + " & " + arr[i+j] + "\n";
            }           
        }    
    }
    return display;
}

console.log(sembilan(numbers, 9));