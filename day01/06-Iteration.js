for (let i = 0; i < 10; i++) {
    console.log("i: "+i);    
}

const s = "Hello JavaScript";
for (let i = 0; i < s.length; i++) {
    if(s[i] === "S") {
        console.log("Huruf S ditemukan pada index: "+i)
        break;
    }    
}

/* 
//while
let i=0;
while (i < s.length) {
    if(s[i] === "S") {
        console.log("Huruf S ditemukan pada index: "+i);
    }    
    i++
}

//do while
let i=0;
do {
    if(s[i] === "S") {
        console.log("Huruf S ditemukan pada index: "+i);
    }    
    i++;
} while(i < s.length)
*/