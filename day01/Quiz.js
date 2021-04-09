//Nomer 1
function sum(angka) {
    let dummy = ""+angka;
    let con = 0;
    for (let i = 0; i < dummy.length; i++) {
        con += angka%10;
        angka= Math.floor(angka/10);  
    }
    return con;
}

console.log("1. Jumlahnya yaitu: "+sum(3456));


//Nomer 2

function reverse(angka) {
    let dummy = ""+angka;
    let a = ""; 
    for (let i = 0; i < dummy.length; i++) {
         a+=angka%10;
         angka=Math.round(angka/10);       
    }
    return a;
}

console.log("2. Reverse urutan angka yaitu: "+reverse(1234));

//nomer 3
function jump(x,y,z) {
    let k=0;
    for(let j=x; j<=y; j+=z) {
        k+=z;
    }
    return k/z;
}

console.log("3. Jumlah Lompatannya yaitu: "+jump(10,85,30));

//nomer 4 
function howManyWord(word) {
    let jumlah = 0;
    for (let i = 0; i < word.length; i++) {
        if(word[i]===" " && (i !== (word.length-1))) {
            jumlah+=1;
        }        
    }
    return jumlah+1;
}

console.log("4. Jumlah Katanya yaitu: "+howManyWord("Koko KOk kok kok kok "));

//nomer 5
function cariKata(word, latter) {
    let benar = true;
    for (let i = 0; i < word.length; i++) {
        if(word[i] === latter) {
            benar = true;
            break;
        } else {
            benar = false;
        }
    }
    return benar;
}

console.log(`5. Kata ada dalam kalimat: ${cariKata("aku suka javascript","k")}
   Kata ada dalam kalimat: ${cariKata("aku suka javascript","z")}`);

//nomer 6
function deretRam(k){
    let ram = 1;
    let display = "";
    for (let i = 0; i <= k; i++) {
        display += ram + " ";   
        ram= ram*2;   
    }
    return display;
}

console.log("6. Deret Ramnya Yaitu: "+deretRam(7));

//nomer 7
function deretSatu(k) {
    let deret = "";
    let satu = "1";
    let dua = "1";
    for (let i = 0; i < k; i++) {      
        deret = deret + dua + " ";
        dua = dua + satu;
    }
    return deret;
}

console.log("7. Deret Satu yaitu: "+deretSatu(5));

//nomer 8
function deretNegation(k) {
    let display = "";    
    for (let i = 1; i <= k; i++) {
        if(i%2===0) {
            display += Math.floor(i/2) +" ";
        } else {
            display += Math.round(i/2)*(-1) + " ";
        }
    }
    return display;
}

console.log("8. Deret Negasi yaitu: "+deretNegation(25));

//nomer 9
function randomPosition(k) {
    let angka = "" + k;
    let display = "";
    for (let i = 100; i < 900; i++) {
        let dummy = ""+i;
        for (let j = 0; j < dummy.length; j++) {
            if(dummy[j]===angka) {
                display += i + " ";
                break;
            }  
        }
    }
    return display;
}

console.log("9. Random Position yaitu: "+randomPosition(7));


//nomer 10
function isPalindrome(word) {
    let benar;
    for (let i = 0; i <= (Math.floor(word.length/2)); i++) {
        if(word[i].toLowerCase() === word[word.length-(i+1)].toLowerCase()) {
            benar = true;
        } else {
            benar = false;
            break;
        }
    }
    return benar;
}

console.log("10. Apakah kata bersifat Palindrome: "+isPalindrome("KasUr inI RusAk"));