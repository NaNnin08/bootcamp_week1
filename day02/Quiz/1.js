let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

//a
fruits.push("Anggur", "Banana", "Sirsak");
console.log(fruits);

//b
fruits.pop();
console.log(fruits);

//c 
fruits.splice(2,1);
console.log(fruits);

//d
fruits.splice(2,3);
console.log(fruits);

//e
fruits.splice(2,0,"Rambutan", "Bengkuang");
console.log(fruits);

//f
fruits.splice(4,1,"Nangka");
console.log(fruits);

//g
let buahSayur = fruits.concat(sayur);
console.log(buahSayur);

//h
buahSayur.reverse();
console.log(buahSayur);

//i
function tukar(vege,a,b) {
    for (let i = 0; i < vege.length; i++) {
        for (let j = 0; j < vege.length-1; j++) {
            if(vege[i]===a && vege[i+j]===b) {
                vege[i] = b;
                vege[i+j] = a;
                break;
            }            
        }
    }
    return vege;
}
console.log(tukar(buahSayur,"Tomat","Jeruk"))
