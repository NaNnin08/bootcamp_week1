let a = 9;
let b = 5;

function swap(a,b) {
    console.log(`Before Swap => a=${a}, b=${b}`)
    if(a>b){
        a = a - b;
        console.log(`After Swap => a=${b}, b=${a+b}`)
    } else {
        b = b - a;
        console.log(`After Swap => a=${a+b}, b=${a}`)
    }
};

swap(a,b);