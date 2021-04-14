function faktorial(n) {
    let display = 1;
    for (let i = n; i > 1; i--) {
         display *= i;
    }
    return display;
}

console.log(faktorial(7));