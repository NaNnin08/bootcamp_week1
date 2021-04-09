//global variabel
myvar  = "Hello JS";

//var Variabel 
var var2= "Hello JS_2";

function test(){
    let x=2;
    console.log(x);
}

//let tidak bisa menggunakan nama variabel yang sama pada scope yang sama
//seperti pada main inisiasi let x=10 lalu di inisiasi lagi ke let x=6
function test2() {
    console.log(x);
}

test();
test2();

const c=1;
//const hanya bisa diinisiasi di awal pembuatan variabel

//prioritas variabel
//1. const
//2. let
//3. var (sudah jarang dipake)