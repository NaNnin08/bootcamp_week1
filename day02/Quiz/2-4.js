let arr = `LG Monitor Asus Laptop 5432 Mix For Youtuber Bluetooth Adapter Solo Leveling Webtoon Panasoni Air Conditioner Karaoke Bazooka PowerBank 24 Hours Backpack of Holding Game Box 5 Universal Gadget Charger USB Squirming Tentacle USB Fishquarium Intel Processor 8 core Space Bar Keyboard Organizer & USB Hub Pop USB Pet Rock Powerstation 5 Dual Heated Travel Mug Crosley Collegiate Portable USB Turntable Hoodie AK-47`.split(" ");

console.log(arr);

//nomer 3
function fillterProduks(s, produks) {
    let display = [];
    for (let i = 0; i < produks.length; i++) {
        if(produks[i][0].toLowerCase() === s.toLowerCase()) {
            display.push(produks[i])
        }        
    }
    return display;
}

console.log(fillterProduks("a", arr));
console.log(fillterProduks("b", arr));
console.log(fillterProduks("u", arr));

//nomer 4
/* function indexProduks(produks) {
    let display = "";
    let produk = produks.sort();
    for (let i = 0; i < produk.length; i++) {
        if(produk[i] !== "") {
            let index = produk[i].split("")[0];
            display += "===" + index + "===" + "\n" + produk[i] + "\n";
            for (let j = 0; j < produk.length-1; j++) {
                let index2 = produk[i+j];
                if(produk[i] === produk[i+j]) {
                    produk.splice(i+1, 1, "");
                }                
            } 
        }
    }
    return display;
} */

/* function indexProduks(produk) {
    let out = "";
    let arr = produk.sort();
    for (let i = 0; i < produk.length; i++) {
        let index = arr[i][0];
        let filter = fillterProduks(index, produk);
        if(index !== ""){
            out+= "==="+index+"==="+"\n";
            for (let j = 0; j < filter.length; j++) {
                out += filter[j] + " ";  
                arr.splice(arr.indexOf(filter[j]), 1)              
            }
        }
        out += "\n";               
    }
    return out;
} */

function indexProduks(produk) {
    let out = "";
    let arr = produk.sort();
    for (let i = 0; i < produk.length; i++) {
        let index = arr[i][0];
        let filter = fillterProduks(index, produk);
        if(index !== ""){
            out+= "==="+index+"==="+"\n";
            for (let j = 0; j < filter.length; j++) {
                for (let k = 1; k < filter.length-1; k++) {
                    if(filter[j]===filter[j+k]) {
                        filter.splice(filter.indexOf(filter[j+k]), 1)  
                    }           
                }
                out += filter[j] + " ";  
                arr.splice(arr.indexOf(filter[j]), 1)              
            }
        }
        out += "\n\n";               
    }
    return out;
}

console.log("index Produk: \n"+indexProduks(arr));